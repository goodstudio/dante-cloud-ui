import type { AxiosHttpResult, BucketEntity } from '/@/declarations';

import { Service, HttpConfig } from '../../base';

class BucketService extends Service {
  private static instance: BucketService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): BucketService {
    if (this.instance == null) {
      this.instance = new BucketService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/bucket';
  }

  private getListAddress(): string {
    return this.getBaseAddress() + '/list';
  }

  private getExistsAddress(): string {
    return this.getBaseAddress() + '/exists';
  }

  public getExistsPath(bucketName: string): string {
    return this.getParamPath(this.getExistsAddress(), bucketName);
  }

  public doesBucketExist(bucketName: string): Promise<AxiosHttpResult<boolean>> {
    return this.getConfig().getHttp().get<boolean, string>(this.getExistsPath(bucketName));
  }

  public listBuckets(): Promise<AxiosHttpResult<Array<BucketEntity>>> {
    return this.getConfig().getHttp().get<Array<BucketEntity>, string>(this.getListAddress());
  }
}

export { BucketService };
