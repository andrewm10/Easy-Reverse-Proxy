import {Proxy} from './util/model';

export let PORT = 370; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXYS: Proxy[] = [
    {
        domain: "easy-reverse-proxy-zeta.vercel.app",
        url: "https://github.com/",
        enable: true,
        template: Github
    }
];
