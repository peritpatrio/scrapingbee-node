import { AxiosPromise } from 'axios';
export interface ScbParams {
    block_ads?: boolean;
    block_resources?: boolean;
    cookies?: string;
    country_code?: string;
    custom_google?: boolean;
    device?: string;
    extract_rules?: string;
    forward_headers?: boolean;
    forward_headers_pure?: boolean;
    js_scenario?: string;
    json_response?: boolean;
    own_proxy?: string;
    premium_proxy?: boolean;
    render_js?: boolean;
    return_page_source?: boolean;
    screenshot?: boolean;
    screenshot_full_page?: boolean;
    screenshot_selector?: string;
    session_id?: number;
    stealth_proxy?: boolean;
    timeout?: number;
    transparent_status_code?: boolean;
    wait?: number;
    wait_for?: string;
    window_height?: number;
    window_width?: number;
}
export interface ScbConfig {
    url: string;
    headers?: Record<string, any>;
    cookies?: string | Record<string, any>;
    params?: Record<string, any> | ScbParams;
    data?: any;
    retries?: number;
}
export declare class ScrapingBeeClient {
    readonly api_key: string;
    constructor(api_key: string);
    private request;
    get(config: ScbConfig): AxiosPromise<any>;
    post(config: ScbConfig): AxiosPromise<any>;
}
