import React from "react";
// import './phong.css';
const Phong = () => {
  return (
    <main className="wrapperMain_content">
      <div className="layout-collections-all">
        <div className="wrapper-mainCollection">
          <div className="banner">
            <div className="wap_name_dt_rr">
              <div className="min_warp2">
                <div
                  className="name_menu_date_restaurant"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p className="name_menu">Khám phá dịch vụ & tiện nghi </p>
                  <h1 className="restaurant">Homestay</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="section-search">
            <div className="form-search">
              <div className="top-search">
                <div className="search-datepicker t-datepicker ">
                  <div className="search-item search-when">
                    <div className="search-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                          stroke="#AAAFB6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.5 2.25V5.25"
                          stroke="#AAAFB6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.5 2.25V5.25"
                          stroke="#AAAFB6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3.75 8.25H20.25"
                          stroke="#AAAFB6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="search-form">
                      <label>Ngày nhận phòng</label>
                      <div className="t-check-in">
                        <div className="t-dates t-date-check-in">
                          <label className="t-date-info-title"></label>
                          <span className="t-day-check-in">03/</span>
                          <span className="t-month-check-in">10/</span>
                          <span className="t-year-check-in">2024</span>
                        </div>
                        <input
                          type="hidden"
                          className="t-input-check-in"
                          value="03/10/2024"
                          name="t-start"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="search-item search-when">
                    <div className="search-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                          stroke="#AAAFB6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.5 2.25V5.25"
                          stroke="#AAAFB6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.5 2.25V5.25"
                          stroke="#AAAFB6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3.75 8.25H20.25"
                          stroke="#AAAFB6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="search-form">
                      <label>Ngày trả phòng</label>
                      <div className="t-check-out">
                        <div className="t-dates t-date-check-out">
                          <label className="t-date-info-title"></label>
                          <span className="t-day-check-out">04/</span>
                          <span className="t-month-check-out">10/</span>
                          <span className="t-year-check-out">2024</span>
                        </div>
                        <input
                          type="hidden"
                          className="t-input-check-out"
                          value="04/10/2024"
                          name="t-end"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search-item search-qty">
                  <div className="search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      viewBox="0 0 30 25"
                    >
                      <path d="M10.39.25C8.13.72 6.23 2.44 5.54 4.64c-.62 1.95-.32 3.93.84 5.66.37.55 1.05 1.22 1.65 1.63.29.2.45.34.4.36s-.37.12-.73.24c-.81.26-2.12.91-2.81 1.37-2.28 1.54-3.84 3.65-4.52 6.09C.09 21.01-.02 22 0 23.39l.02 1.13.19.17c.26.23.63.24.86.01.08-.08.16-.21.18-.28.01-.07.04-.7.05-1.41.05-1.98.27-2.96.98-4.38.42-.84.91-1.49 1.75-2.34.92-.93 1.64-1.45 2.71-1.98 1.66-.81 3.13-1.15 5.02-1.14 1.45 0 2.41.17 3.76.64 2.71.94 4.99 3.04 5.98 5.53.47 1.18.63 2.1.63 3.65 0 .63.02 1.24.04 1.34.13.67 1.07.73 1.25.08.07-.27.08-1.51 0-2.46-.11-1.37-.39-2.41-.96-3.63-1.21-2.52-3.36-4.49-6.1-5.58-.32-.13-.7-.26-.84-.3-.6-.16-.6-.15-.18-.43 1.11-.74 2.06-1.95 2.51-3.19a6.47 6.47 0 0 0-1.37-6.62 6.69 6.69 0 0 0-3.6-1.98c-.65-.12-1.85-.1-2.5.04Zm2.62 1.31c1.99.55 3.43 2.09 3.83 4.07.12.6.09 1.77-.06 2.32-.12.45-.54 1.32-.81 1.7a5.287 5.287 0 0 1-3.01 2.03c-.7.18-1.83.18-2.5 0-2.5-.66-4.18-3.07-3.9-5.59.27-2.36 1.98-4.2 4.32-4.62.41-.08 1.75-.02 2.13.08Z"></path>
                      <path d="M20.58 2.8c-.27.13-.4.45-.32.73.1.33.28.44.81.49.67.06.93.13 1.54.43.78.38 1.34.93 1.72 1.71.35.7.47 1.26.43 1.96a3.907 3.907 0 0 1-3.46 3.67c-.69.08-.9.16-1.01.44-.07.18-.08.26-.02.44.1.34.3.43 1.01.49 2.78.19 5.05 1.49 6.39 3.67.73 1.18 1.03 2.4 1.03 4.23 0 .67.01.77.12.93.27.39.9.33 1.08-.09.06-.15.09-.45.09-1.13 0-1.55-.22-2.63-.8-3.82-.72-1.51-1.78-2.71-3.22-3.63-.46-.3-1.42-.77-1.89-.91-.17-.06-.31-.13-.31-.16s.02-.05.05-.05c.11 0 1.01-.9 1.27-1.25a5.213 5.213 0 0 0 0-6.05c-.36-.5-1.11-1.18-1.63-1.48-.99-.56-2.4-.87-2.9-.62Z"></path>
                    </svg>
                  </div>
                  <div className="search-form">
                    <label>Khách</label>
                    <div className="group-dropdown-qty">
                      <div className="val-qty" id="val-guests">
                        <span id="room-qty">1</span> Phòng
                        <span className="qty-pc">,</span>
                        <span className="qty-mb">|</span>
                        <span id="adult-qty">1</span> Người lớn
                        <span className="qty-pc">,</span>
                        <span className="qty-mb">|</span>
                        <span id="child-qty">0</span> Trẻ em
                      </div>
                      <div className="dropdown-qty">
                        <div className="dropdown-group">
                          <span className="dropdown-title">Phòng</span>
                          <div className="group-qty">
                            <button
                              type="button"
                              onclick="HRT.All.minusQuantitySearch('room-qty')"
                              className="qty-btn qty-btn-minus disabled"
                              disabled=""
                            ></button>
                            <input
                              type="text"
                              id="room-quantity"
                              name="room-qty"
                              value="1"
                              min="1"
                              maxlength="3"
                              className="input-qty"
                            ></input>
                            <button
                              type="button"
                              onclick="HRT.All.plusQuantitySearch('room-qty')"
                              className="qty-btn qty-btn-plus"
                            ></button>
                          </div>
                        </div>
                        <div className="dropdown-group">
                          <span className="dropdown-title">Người lớn</span>
                          <div className="group-qty">
                            <button
                              type="button"
                              onclick="HRT.All.minusQuantitySearch('adult-qty')"
                              className="qty-btn qty-btn-minus disabled"
                              disabled=""
                            ></button>
                            <input
                              type="text"
                              id="adult-quantity"
                              name="adult-qty"
                              value="1"
                              min="1"
                              className="input-qty"
                            ></input>
                            <button
                              type="button"
                              onclick="HRT.All.plusQuantitySearch('adult-qty')"
                              className="qty-btn qty-btn-plus"
                            ></button>
                          </div>
                        </div>
                        <div className="dropdown-group">
                          <span className="dropdown-title">Trẻ em</span>
                          <div className="group-qty">
                            <button
                              type="button"
                              onclick="HRT.All.minusQuantitySearch('child-qty')"
                              className="qty-btn qty-btn-minus disabled"
                              disabled=""
                            ></button>
                            <input
                              type="text"
                              id="child-quantity"
                              name="child-qty"
                              value="0"
                              min="0"
                              className="input-qty"
                            ></input>
                            <button
                              type="button"
                              onclick="HRT.All.plusQuantitySearch('child-qty')"
                              className="qty-btn qty-btn-plus"
                            ></button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div>
                  <button tyle="button" className="ocean-button button">
                    Đặt phòng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section
            className="section-collection-about-1"
            style="padding: 100px 0;"
          >
            <div className="container">
              <div className="heading-title text-center">
                <p className="title1">Chào mừng bạn đến với Paradiso</p>
                <h2 className="title2">
                  Tận hưởng quang cảnh biển xanh từ những ngôi nhà với thiết kế
                  hiện đại
                </h2>
                <p className="heading-desc">
                  Paradiso cung cấp nhiều lựa chọn chỗ nghỉ cho các nhóm với mọi
                  quy mô. Cho dù bạn quan tâm đến chỗ nghỉ tại khu nghỉ dưỡng
                  dành cho doanh nghiệp hay gia đình, phòng lãng mạn cho hai
                  người hay nơi nghỉ dưỡng khép kín trong cabin, chúng tôi đều
                  có chỗ nghỉ hoàn hảo dành cho bạn. Đội ngũ của chúng tôi tận
                  tâm cung cấp dịch vụ và chỗ nghỉ ngoạn mục như quang cảnh.
                </p>
                <div className="list-btn">
                  <div className="btn-more">
                    <a href="#" className="btn-ldp">
                      <span>Nhà gỗ &amp;Nhà nghỉ</span>
                    </a>
                  </div>
                  <div className="btn-more">
                    <a href="#" className="btn-ldp">
                      <span>Phòng &amp;Phòng Suite</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="section-collection-col section-collection-col-1"
            style="padding: 100px 0;"
          >
            <div
              className="col-banner"
              style="--bg-col-all: url(//theme.hstatic.net/200000909393/1001269498/14/collection_col_1_banner.jpg?v=2537)"
            >
              <div className="container breadcrumb-content text-center">
                <p className="breadcrumb-title1">
                  Chào mừng bạn đến với Paradiso
                </p>
                <h2>Khám phá Nhà gỗ &amp;Nhà nghỉ</h2>
                <p className="breadcrumb-title2">
                  Mang đến cho du khách bầu không khí lịch sự với những tiện
                  nghi hiện đại.
                </p>
              </div>
            </div>
            <div className="container_homelist">
              <div className="row_homelist list-pro list-pro-1">
                <div className="col-pro-style-1">
                  <div className="product-loop product-loop-style-1">
                    <div className="product-inner">
                      <div className="proloop-image">
                        <div className="pro-price">
                          <span className="price">3,200,000₫</span>
                          <span>/ Đêm</span>
                        </div>
                        <div className="owlCarousel-style owl-carousel owl-loaded owl-drag">
                          <div
                            className="owl-stage-outer owl-height"
                            style={{ height: "410px" }}
                          >
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all",
                                width: "3690px",
                              }}
                            >
                              <div
                                className="owl-item active"
                                style={{ width: "615px" }}
                              >
                                <a href="/products/double-suite">
                                  <div className="product--image img-slide">
                                    <div className="lazy-img">
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          srcSet="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_large.jpg"
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          srcSet="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_1024x1024.jpg"
                                        />
                                        <img
                                          className="img-loop"
                                          src="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_1024x1024.jpg"
                                          alt="Double Suite"
                                        />
                                      </picture>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="owl-nav">
                            <button
                              type="button"
                              role="presentation"
                              className="owl-prev disabled"
                              aria-label="prev slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g transform="matrix(-1, 0, 0, -1, 511.9994964599609, 511.99959468841564)">
                                  <g>
                                    <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                                  </g>
                                </g>
                              </svg>
                            </button>
                            <button
                              type="button"
                              role="presentation"
                              className="owl-next"
                              aria-label="next slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                                </g>
                              </svg>
                            </button>
                          </div>

                          <div className="owl-dots">
                            <button role="button" className="owl-dot active">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="proloop-detail">
                        <h3>
                          <a href="/products/double-suite">Double Suite</a>
                        </h3>
                        <div className="pro-tag">
                          <div className="tag-item tag-area">
                            <span>150</span>
                            <span className="tag-unit">
                              m<sup>2</sup>
                            </span>
                          </div>
                          <div className="tag-item tag-guests">
                            <span>10</span>
                            <span className="tag-unit">Guests</span>
                          </div>
                          <div className="tag-item tag-bed">
                            <span>5</span>
                            <span className="tag-unit">Beds</span>
                          </div>
                          <div className="tag-item tag-bathroom">
                            <span>4</span>
                            <span className="tag-unit">Bathroom</span>
                          </div>
                        </div>
                        <div className="pro-desc">
                          Double Suite rộng 150m² với thiết kế trong suốt, nằm ở
                          tầng cao nhất của khách sạn, mang đến tầm nhìn toàn
                          cảnh tuyệt đẹp...
                        </div>
                        <div className="btn-more">
                          <a href="/products/double-suite" className="btn-a">
                            <span>Xem chi tiết</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="512"
                              height="512"
                              viewBox="0 0 490.8 490.8"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"
                                  fill="#f44336"
                                ></path>
                                <path
                                  d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"
                                  fill="#000000"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-pro-style-1">
                  <div className="product-loop product-loop-style-1">
                    <div className="product-inner">
                      <div className="proloop-image">
                        <div className="pro-price">
                          <span className="price">3,200,000₫</span>
                          <span>/ Đêm</span>
                        </div>
                        <div className="owlCarousel-style owl-carousel owl-loaded owl-drag">
                          <div
                            className="owl-stage-outer owl-height"
                            style={{ height: "410px" }}
                          >
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all",
                                width: "3690px",
                              }}
                            >
                              <div
                                className="owl-item active"
                                style={{ width: "615px" }}
                              >
                                <a href="/products/double-suite">
                                  <div className="product--image img-slide">
                                    <div className="lazy-img">
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          srcSet="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_large.jpg"
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          srcSet="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_1024x1024.jpg"
                                        />
                                        <img
                                          className="img-loop"
                                          src="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_1024x1024.jpg"
                                          alt="Double Suite"
                                        />
                                      </picture>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="owl-nav">
                            <button
                              type="button"
                              role="presentation"
                              className="owl-prev disabled"
                              aria-label="prev slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g transform="matrix(-1,-1.2246467991473532e-16,1.2246467991473532e-16,-1,511.9994964599609,511.99959468841564)">
                                  <g>
                                    <g>
                                      <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </button>
                            <button
                              type="button"
                              role="presentation"
                              className="owl-next"
                              aria-label="next slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <g>
                                      <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </button>
                          </div>

                          <div className="owl-dots">
                            <button role="button" className="owl-dot active">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="proloop-detail">
                        <h3>
                          <a href="/products/double-suite">Double Suite</a>
                        </h3>
                        <div className="pro-tag">
                          <div className="tag-item tag-area">
                            <span>150</span>
                            <span className="tag-unit">
                              m<sup>2</sup>
                            </span>
                          </div>
                          <div className="tag-item tag-guests">
                            <span>10</span>
                            <span className="tag-unit">Guests</span>
                          </div>
                          <div className="tag-item tag-bed">
                            <span>5</span>
                            <span className="tag-unit">Beds</span>
                          </div>
                          <div className="tag-item tag-bathroom">
                            <span>4</span>
                            <span className="tag-unit">Bathroom</span>
                          </div>
                        </div>
                        <div className="pro-desc">
                          Double Suite rộng 150m² với thiết kế trong suốt, nằm ở
                          tầng cao nhất của khách sạn, mang đến tầm nhìn toàn
                          cảnh tuyệt đẹp...
                        </div>
                        <div className="btn-more">
                          <a href="/products/double-suite" className="btn-a">
                            <span>Xem chi tiết</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlnsSvgjs="http://svgjs.com/svgjs"
                              width="512"
                              height="512"
                              viewBox="0 0 490.8 490.8"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"
                                  fill="#f44336"
                                  data-original="#f44336"
                                ></path>
                                <path
                                  d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"
                                  fill="#000000"
                                  data-original="#000000"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-pro-style-1">
                  <div className="product-loop product-loop-style-1">
                    <div className="product-inner">
                      <div className="proloop-image">
                        <div className="pro-price">
                          <span className="price">3,200,000₫</span>
                          <span>/ Đêm</span>
                        </div>
                        <div className="owlCarousel-style owl-carousel owl-loaded owl-drag">
                          <div
                            className="owl-stage-outer owl-height"
                            style={{ height: "410px" }}
                          >
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all",
                                width: "3690px",
                              }}
                            >
                              <div
                                className="owl-item active"
                                style={{ width: "615px" }}
                              >
                                <a href="/products/double-suite">
                                  <div className="product--image img-slide">
                                    <div className="lazy-img">
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          srcSet="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_large.jpg"
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          srcSet="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_1024x1024.jpg"
                                        />
                                        <img
                                          className="img-loop"
                                          src="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_1024x1024.jpg"
                                          alt="Double Suite"
                                        />
                                      </picture>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="owl-nav">
                            <button
                              type="button"
                              role="presentation"
                              className="owl-prev disabled"
                              aria-label="prev slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g transform="matrix(-1, -1.2246467991473532e-16, 1.2246467991473532e-16, -1, 511.9994964599609, 511.99959468841564)">
                                  <g>
                                    <g>
                                      <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </button>
                            <button
                              type="button"
                              role="presentation"
                              className="owl-next"
                              aria-label="next slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <g>
                                      <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </button>
                          </div>

                          <div className="owl-dots">
                            <button role="button" className="owl-dot active">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="proloop-detail">
                        <h3>
                          <a href="/products/double-suite">Double Suite</a>
                        </h3>
                        <div className="pro-tag">
                          <div className="tag-item tag-area">
                            <span>150</span>
                            <span className="tag-unit">
                              m<sup>2</sup>
                            </span>
                          </div>
                          <div className="tag-item tag-guests">
                            <span>10</span>
                            <span className="tag-unit">Guests</span>
                          </div>
                          <div className="tag-item tag-bed">
                            <span>5</span>
                            <span className="tag-unit">Beds</span>
                          </div>
                          <div className="tag-item tag-bathroom">
                            <span>4</span>
                            <span className="tag-unit">Bathroom</span>
                          </div>
                        </div>
                        <div className="pro-desc">
                          Double Suite rộng 150m² với thiết kế trong suốt, nằm ở
                          tầng cao nhất của khách sạn, mang đến tầm nhìn toàn
                          cảnh tuyệt đẹp...
                        </div>
                        <div className="btn-more">
                          <a href="/products/double-suite" className="btn-a">
                            <span>Xem chi tiết</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlnsSvgjs="http://svgjs.com/svgjs"
                              width="512"
                              height="512"
                              viewBox="0 0 490.8 490.8"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"
                                  fill="#f44336"
                                />
                                <path
                                  d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"
                                  fill="#000000"
                                />
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-pro-style-1">
                  <div className="product-loop product-loop-style-1">
                    <div className="product-inner">
                      <div className="proloop-image">
                        <div className="pro-price">
                          <span className="price">3,200,000₫</span>
                          <span>/ Đêm</span>
                        </div>
                        <div className="owlCarousel-style owl-carousel owl-loaded owl-drag">
                          <div
                            className="owl-stage-outer owl-height"
                            style={{ height: "410px" }}
                          >
                            <div
                              className="owl-stage"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all",
                                width: "3690px",
                              }}
                            >
                              <div
                                className="owl-item active"
                                style={{ width: "615px" }}
                              >
                                <a href="/products/double-suite">
                                  <div className="product--image img-slide">
                                    <div className="lazy-img">
                                      <picture>
                                        <source
                                          media="(max-width: 480px)"
                                          srcSet="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_large.jpg"
                                        />
                                        <source
                                          media="(min-width: 481px)"
                                          srcSet="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_1024x1024.jpg"
                                        />
                                        <img
                                          className="img-loop"
                                          src="//product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_1024x1024.jpg"
                                          alt="Double Suite"
                                        />
                                      </picture>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="owl-nav">
                            <button
                              type="button"
                              role="presentation"
                              className="owl-prev disabled"
                              aria-label="prev slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g transform="matrix(-1, 0, 0, -1, 511.9994964599609, 511.99959468841564)">
                                  <g>
                                    <g>
                                      <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </button>
                            <button
                              type="button"
                              role="presentation"
                              className="owl-next"
                              aria-label="next slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <g>
                                      <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </button>
                          </div>

                          <div className="owl-dots">
                            <button role="button" className="owl-dot active">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                            <button role="button" className="owl-dot">
                              <span></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="proloop-detail">
                        <h3>
                          <a href="/products/double-suite">Double Suite</a>
                        </h3>
                        <div className="pro-tag">
                          <div className="tag-item tag-area">
                            <span>150</span>
                            <span className="tag-unit">
                              m<sup>2</sup>
                            </span>
                          </div>
                          <div className="tag-item tag-guests">
                            <span>10</span>
                            <span className="tag-unit">Guests</span>
                          </div>
                          <div className="tag-item tag-bed">
                            <span>5</span>
                            <span className="tag-unit">Beds</span>
                          </div>
                          <div className="tag-item tag-bathroom">
                            <span>4</span>
                            <span className="tag-unit">Bathroom</span>
                          </div>
                        </div>
                        <div className="pro-desc">
                          Double Suite rộng 150m² với thiết kế trong suốt, nằm ở
                          tầng cao nhất của khách sạn, mang đến tầm nhìn toàn
                          cảnh tuyệt đẹp...
                        </div>
                        <div className="btn-more">
                          <a href="/products/double-suite" className="btn-a">
                            <span>Xem chi tiết</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlnsSvgjs="http://svgjs.com/svgjs"
                              width="512"
                              height="512"
                              viewBox="0 0 490.8 490.8"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"
                                  fill="#f44336"
                                  data-original="#f44336"
                                ></path>
                                <path
                                  d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"
                                  fill="#000000"
                                  data-original="#000000"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="section-collection-about-2"
            style="--bg-col-all: url(//theme.hstatic.net/200000909393/1001269498/14/collection_about_2_banner.jpg?v=2537)"
          >
            <div className="container_homelist">
              <div className="heading-title text-center">
                <p className="title1">Chào mừng bạn đến với Maple Inn</p>
                <h2 className="title2">
                  Trải nghiệm lưu trú thoải mái và tiện nghi
                </h2>
                <p className="heading-desc">
                  Để tạo sự thoải mái cho tất cả khách, tất cả các tiện nghi và
                  chỗ ở của chúng tôi đều không khói thuốc 100% – bất kể chất
                  liệu hay thiết bị. Tất cả các phòng đều có TV cáp, tủ lạnh
                  mini, máy pha cà phê, lò vi sóng và khăn trải giường và khăn
                  tắm miễn phí.
                </p>
                <div className="about-time">
                  <div>
                    <p className="time">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                      </svg>
                      <span>Thời gian nhận phòng: 12:00 PM</span>
                    </p>
                  </div>
                  <div>
                    <p className="time">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                      </svg>
                      <span>Check-out Time: 10:00 AM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Phong;
