/**
 * @export
 * @interface ProvinceShortResponse
 */
export interface ProvinceShortResponse {

  /**
   * @type {string}
   * @memberof ProvinceShortResponse
   */
  name?: string;

  /**
   * @type {string}
   * @memberof ProvinceShortResponse
   */
  image?: string;
}

export interface ProvinceResponse extends ProvinceShortResponse {}

/**
 * @export
 * @interface VideoDetailResponse
 */
export interface VideoDetailResponse {

  /**
   * @type {string}
   * @memberof VideoDetailResponse
   */
  id?: string;

  /**
   * @type {ProvinceShortResponse}
   * @memberof VideoDetailResponse
   */
  province?: ProvinceShortResponse;

  /**
   * @type {string}
   * @memberof VideoDetailResponse
   */
  title?: string;

  /**
   * @type {string}
   * @memberof VideoDetailResponse
   */
  url?: string;

  /**
   * @type {number}
   * @memberof VideoDetailResponse
   */
  likesCount?: number;

  /**
   * @type {number}
   * @memberof VideoDetailResponse
   */
  repliesCount?: number;

  /**
   * @type {string}
   * @memberof VideoDetailResponse
   */
  description?: string;
}
