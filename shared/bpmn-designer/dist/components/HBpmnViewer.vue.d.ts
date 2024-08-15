import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<{
    diagram: {
        type: StringConstructor;
        default: string;
    };
    nodes: {
        type: PropType<Array<string>>;
        default: () => never[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    diagram: {
        type: StringConstructor;
        default: string;
    };
    nodes: {
        type: PropType<Array<string>>;
        default: () => never[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>>, {
    diagram: string;
    height: string | number;
    nodes: string[];
}, {}>;
export default _default;
