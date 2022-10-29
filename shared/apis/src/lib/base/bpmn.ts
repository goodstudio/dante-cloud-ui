import type {
  Page,
  Pagination,
  AxiosHttpResult,
  BpmnPathParams,
  BpmnListParams,
  BpmnListEntity,
  BpmnListCountEntity,
  BpmnGetListParams,
  BpmnPostListParams,
  BpmnDeleteQueryParams
} from '/@/declarations';

import { Service, lodash } from './core';

class PathParamBuilder {
  private address;
  private operation = '';
  private id = '';
  private key = '';
  private tenantId = '';

  constructor(address: string) {
    this.address = address;
  }

  public setOperation(operation: string): PathParamBuilder {
    this.operation = operation;
    return this;
  }

  public setId(id: string): PathParamBuilder {
    this.id = id;
    return this;
  }

  public setKey(key: string): PathParamBuilder {
    this.key = key;
    return this;
  }

  public setTenantId(tenantId: string): PathParamBuilder {
    this.tenantId = tenantId;
    return this;
  }

  public withParam(param: BpmnPathParams): PathParamBuilder {
    this.id = param.id as string;
    this.key = param.key as string;
    this.tenantId = param.tenantId as string;
    return this;
  }

  public build(): string {
    let result = this.address;
    if (lodash.endsWith(result, '/')) {
      result = lodash.trimEnd(result, '/');
    }

    if (this.id) {
      result += '/' + this.id;
    } else {
      if (this.key) {
        result += '/key/' + this.key;
      }

      if (this.tenantId) {
        result += '/tenant-id/' + this.tenantId;
      }
    }

    if (this.operation) {
      result += '/' + this.operation;
    }

    return result;
  }
}

export abstract class BaseBpmnService<R extends BpmnListEntity, P extends BpmnListParams> extends Service {
  private getCountAddress(): string {
    return this.getBaseAddress() + '/count';
  }

  private getListAddress(): string {
    return this.getBaseAddress() + '/list';
  }

  protected createAddressWithParam(params: BpmnPathParams, operation: string = ''): string {
    let builder = new PathParamBuilder(this.getBaseAddress());

    if (operation) {
      return builder.withParam(params).setOperation(operation).build();
    } else {
      return builder.withParam(params).build();
    }
  }

  private getCount(params: P = {} as P): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.getConfig()
        .getHttp()
        .get<BpmnListCountEntity>(this.getCountAddress(), params)
        .then(response => {
          if (response) {
            const data = response as BpmnListCountEntity;
            resolve(data.count);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  private getPostCount(params: P = {} as P): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.getConfig()
        .getHttp()
        .get<BpmnListCountEntity>(this.getCountAddress(), params)
        .then(response => {
          if (response) {
            const data = response as BpmnListCountEntity;
            resolve(data.count);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  private getList(pagination: Pagination, count: number, params: P = {} as P): Promise<Page<R>> {
    const full: BpmnGetListParams<P> = Object.assign(params, {
      sortBy: 'id',
      sortOrder: 'desc',
      firstResult: (pagination.pageNumber - 1) * pagination.pageSize,
      maxResults: pagination.pageSize
    });

    return new Promise<Page<R>>((resolve, reject) => {
      this.getConfig()
        .getHttp()
        .get<R[]>(this.getBaseAddress(), full)
        .then(result => {
          const data: Page<R> = {
            content: result as R[],
            totalPages: count ? (count + pagination.pageSize - 1) / pagination.pageSize : count,
            totalElements: String(count)
          };
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  private getPostList(pagination: Pagination, count: number, params: P = {} as P): Promise<Page<R>> {
    const query = {
      firstResult: (pagination.pageNumber - 1) * pagination.pageSize,
      maxResults: pagination.pageSize
    };

    const body: BpmnPostListParams<P, any> = Object.assign(params, {
      sorting: {
        sortBy: 'id',
        sortOrder: 'desc'
      }
    });

    return new Promise<Page<R>>((resolve, reject) => {
      this.getConfig()
        .getHttp()
        .postWithParams<R[]>(this.getBaseAddress(), query, body)
        .then(result => {
          const data: Page<R> = {
            content: result as R[],
            totalPages: count ? (count + pagination.pageSize - 1) / pagination.pageSize : count,
            totalElements: String(count)
          };
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public getByPage(pagination: Pagination, params: P = {} as P): Promise<Page<R>> {
    return new Promise<Page<R>>((resolve, reject) => {
      this.getCount(params)
        .then(count => {
          this.getList(pagination, count, params).then(result => {
            resolve(result);
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public getByPageOnPost(pagination: Pagination, params: P = {} as P): Promise<Page<R>> {
    return new Promise<Page<R>>((resolve, reject) => {
      this.getPostCount(params)
        .then(count => {
          this.getPostList(pagination, count, params).then(result => {
            resolve(result);
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public getById(id: string): Promise<AxiosHttpResult<R>> {
    return this.getConfig()
      .getHttp()
      .get<R>(this.createAddressWithParam({ id: id }));
  }

  public abstract deleteById(id: string, query: BpmnDeleteQueryParams): Promise<AxiosHttpResult<string>>;
}
