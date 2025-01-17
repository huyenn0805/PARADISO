import React from 'react';
// import 'swiper/swiper-bundle.min.css'; // Import CSS của Swiper nếu cần

const Trangchu = () => {
  return (
    <main>
 <div className="banner index">
  <div className="wap_name_dt_rr index">
    <div className="min_warp2">
      <div className="name_menu_date_restaurant" data-aos="fade-up" data-aos-duration="3000">
        <h1 className="restaurant index">Khám phá Maple Inn</h1>
        <p className="date index">Nơi nghỉ dưỡng ấm áp, yên tĩnh và giải trí</p>
        <div className="btn-more text-center">
          <a href="#">
            <button className="ocean-button index" id="oceanButton">Liên Hệ Ngay</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    <div class="section_menu">
        <div class="form_calendar_booking">
            <div class="min_warp3">
                <div class="form_booking">
                   <div class="checkin_homstay t-datepicker">
                        <div class="date_check_in search_item">
                            <div class="seach_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#AAAFB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M16.5 2.25V5.25" stroke="#AAAFB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7.5 2.25V5.25" stroke="#AAAFB6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M3.75 8.25H20.25" stroke="#AAAFB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div class="search-form">
                                <label>Ngày nhận phòng</label>
                                <div class="t-check-in">
                                    <div class="t-dates t-date-check-in">
                                        <label class="t-date-info-title"></label>
                                        <span class="t-day-check-in">02/</span>
                                        <span class="t-month-check-in">10/</span>
                                        <span class="t-year-check-in">2024</span>
                                    </div>
                                    <input type="hidden" class="t-input-check-in" value="02/10/2024" name="t-start"></input></div>
                            </div>
                        </div>
                        <div class="date_check_out search_item">
                            <div class="seach_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#AAAFB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M16.5 2.25V5.25" stroke="#AAAFB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7.5 2.25V5.25" stroke="#AAAFB6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M3.75 8.25H20.25" stroke="#AAAFB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div class="search-form">
                                <label>Ngày trả phòng</label>
                                <div class="t-check-in">
                                    <div class="t-dates t-date-check-in">
                                        <label class="t-date-info-title"></label>
                                        <span class="t-day-check-in">02/</span>
                                        <span class="t-month-check-in">10/</span>
                                        <span class="t-year-check-in">2024</span>
                                    </div>
                                    <input type="hidden" class="t-input-check-in" value="02/10/2024" name="t-start"></input></div>
                            </div>
                        </div>
                   </div>
                    <div class="number_people search_item">
                        <div class="seach_icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 30 25">
                                <path d="M10.39.25C8.13.72 6.23 2.44 5.54 4.64c-.62 1.95-.32 3.93.84 5.66.37.55 1.05 1.22 1.65 1.63.29.2.45.34.4.36s-.37.12-.73.24c-.81.26-2.12.91-2.81 1.37-2.28 1.54-3.84 3.65-4.52 6.09C.09 21.01-.02 22 0 23.39l.02 1.13.19.17c.26.23.63.24.86.01.08-.08.16-.21.18-.28.01-.07.04-.7.05-1.41.05-1.98.27-2.96.98-4.38.42-.84.91-1.49 1.75-2.34.92-.93 1.64-1.45 2.71-1.98 1.66-.81 3.13-1.15 5.02-1.14 1.45 0 2.41.17 3.76.64 2.71.94 4.99 3.04 5.98 5.53.47 1.18.63 2.1.63 3.65 0 .63.02 1.24.04 1.34.13.67 1.07.73 1.25.08.07-.27.08-1.51 0-2.46-.11-1.37-.39-2.41-.96-3.63-1.21-2.52-3.36-4.49-6.1-5.58-.32-.13-.7-.26-.84-.3-.6-.16-.6-.15-.18-.43 1.11-.74 2.06-1.95 2.51-3.19a6.47 6.47 0 0 0-1.37-6.62 6.69 6.69 0 0 0-3.6-1.98c-.65-.12-1.85-.1-2.5.04Zm2.62 1.31c1.99.55 3.43 2.09 3.83 4.07.12.6.09 1.77-.06 2.32-.12.45-.54 1.32-.81 1.7a5.287 5.287 0 0 1-3.01 2.03c-.7.18-1.83.18-2.5 0-2.5-.66-4.18-3.07-3.9-5.59.27-2.36 1.98-4.2 4.32-4.62.41-.08 1.75-.02 2.13.08Z"></path>
                                <path d="M20.58 2.8c-.27.13-.4.45-.32.73.1.33.28.44.81.49.67.06.93.13 1.54.43.78.38 1.34.93 1.72 1.71.35.7.47 1.26.43 1.96a3.907 3.907 0 0 1-3.46 3.67c-.69.08-.9.16-1.01.44-.07.18-.08.26-.02.44.1.34.3.43 1.01.49 2.78.19 5.05 1.49 6.39 3.67.73 1.18 1.03 2.4 1.03 4.23 0 .67.01.77.12.93.27.39.9.33 1.08-.09.06-.15.09-.45.09-1.13 0-1.55-.22-2.63-.8-3.82-.72-1.51-1.78-2.71-3.22-3.63-.46-.3-1.42-.77-1.89-.91-.17-.06-.31-.13-.31-.16s.02-.05.05-.05c.11 0 1.01-.9 1.27-1.25a5.213 5.213 0 0 0 0-6.05c-.36-.5-1.11-1.18-1.63-1.48-.99-.56-2.4-.87-2.9-.62Z"></path>
                            </svg>
                        </div>
                        <div class="search-form">
                            <label>Khách</label>
                            <div class="group-dropdown-qty">
                                <div class="val-qty" id="val-guests"><span id="room-qty">1</span> Phòng<span class="qty-pc">,</span><span class="qty-mb">|</span> <span id="adult-qty">1</span> Người lớn<span class="qty-pc">,</span><span class="qty-mb">|</span> <span id="child-qty">0</span> Trẻ em</div>
                                <div class="dropdown-qty show_qty">
                                    <div class="dropdown-group">
                                        <span class="dropdown-title">Phòng</span>
                                        <div class="group-qty">
                                            <button type="button" onclick="HRT.All.minusQuantitySearch('room-qty')" class="qty-btn qty-btn-minus disabled" disabled=""></button>
                                            <input type="text" id="room-quantity" name="room-qty" value="1" min="1" maxlength="3" class="input-qty"></input>
                                            <button type="button" onclick="HRT.All.plusQuantitySearch('room-qty')" class="qty-btn qty-btn-plus"></button>
                                        </div>
                                    </div>
                                    <div class="dropdown-group">
                                        <span class="dropdown-title">Người lớn</span>
                                        <div class="group-qty">
                                            <button type="button" onclick="HRT.All.minusQuantitySearch('adult-qty')" class="qty-btn qty-btn-minus disabled" disabled=""></button>
                                            <input type="text" id="adult-quantity" name="adult-qty" value="1" min="1" class="input-qty"></input>
                                            <button type="button" onclick="HRT.All.plusQuantitySearch('adult-qty')" class="qty-btn qty-btn-plus"></button>
                                        </div>
                                    </div>
                                    <div class="dropdown-group">
                                        <span class="dropdown-title">Trẻ em</span>
                                        <div class="group-qty">
                                            <button type="button" onclick="HRT.All.minusQuantitySearch('child-qty')" class="qty-btn qty-btn-minus disabled" disabled=""></button>
                                            <input type="text" id="child-quantity" name="child-qty" value="0" min="0" class="input-qty"></input>
                                            <button type="button" onclick="HRT.All.plusQuantitySearch('child-qty')" class="qty-btn qty-btn-plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="btn-more text-center search_btn ">
                        <a href="#"><button class="ocean-button book_room" id="oceanButton">Đặt phòng</button></a>
                    </div>

                </div>
                <div class="row140">
                    <div class="row2">
                        <div class="col-lg-4 col-md-6 col-12 banner--1">
                            <div class="about-banner">
                               <picture>
    <source media="(max-width: 991px)" srcSet="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_mb_1_1024x1024.jpg?v=2537" />
    <source media="(min-width: 992px)" srcSet="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_1.jpg?v=2537" />
    <img src="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_1.jpg?v=2537" alt="banner 1" />
</picture>

                            </div>
                        </div>
                        <div class="col-lg-4 col-12 banner--2">
                            <div class="about-banner banner-content">
                            <picture>
    <source media="(max-width: 991px)" srcSet="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_mb_2_1024x1024.jpg?v=2537" />
    <source media="(min-width: 992px)" srcSet="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_2.jpg?v=2537" />
    <img src="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_2.jpg?v=2537" alt="banner 2" />
</picture>

                                <div class="about-content text-center">
                                    <div class="heading-title">
                                        <p class="title1">Chào mừng bạn đến với Maple Inn</p>
                                        <h2 class="title2">Ngay trung tâm thành phố, cảnh quan tuyệt đẹp</h2>
                                    </div>
                                    <div class="btn_map col4">
                                        <a href="#"><span>Xem thêm</span></a>
                                    </div>    
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12 banner--3">
                            <div class="about-banner">
                            <picture>
    <source media="(max-width: 991px)" srcSet="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_mb_3_1024x1024.jpg?v=2537" />
    <source media="(min-width: 992px)" srcSet="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_3.jpg?v=2537" />
    <img src="//theme.hstatic.net/200000909393/1001269498/14/home_about_banner_3.jpg?v=2537" alt="banner 3" />
</picture>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
       </div>
{/* <!-- show homstay  --> */}
<div className="min_warp2">
  <div className="row8">
    <div className="heading_title row_left" data-aos="fade-up" data-aos-duration="1500">
      <p className="title1">Tận hưởng trải nghiệm lưu trú đẳng cấp</p>
      <h2 className="title2 show_room">Nơi nghỉ dưỡng của bạn</h2>
      <p className="des_pro show_room">
        Trốn đến những ngọn núi và thung lũng xinh đẹp nơi giấc mơ thành hiện thực. Văn hóa, thiên nhiên, suối và ẩm thực. Đắm mình trong những phẩm chất phục hồi của thiên nhiên, tránh xa những xáo trộn của cuộc sống thường ngày.
      </p>
    </div>
    <div className="btn_slide">
      <div className="owl-nav">
        <button type="button" role="presentation" className="owl-prev" aria-label="prev slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <g transform="matrix(-1, 0, 0, 1, 511.9994964599609, 0)">
              <g>
                <g>
                  <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701C391.333,275.032,391.333,236.967,367.954,213.588z"></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button type="button" role="presentation" className="owl-next" aria-label="next slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
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
    </div>
    <ul className="homestay_list">
      <li>
        <a href="">
          <div className="img_homstay">
            <div className="pro-price">
              <span className="price">1,400,000₫</span>
              <span>/ Đêm</span>
            </div>
            <img src="/image/HST1.png" alt="" />
          </div>
          <div className="des_hst">
            <div className="proloop-detail">
              <h3><a href="/products/double-suite">Double Suite</a></h3>
              <div className="pro-tag">
                <div className="tag-item tag-area">
                  <span>150</span> <span className="tag-unit">m<sup>2</sup></span>
                </div>
                <div className="tag-item tag-guests">
                  <span>10</span> <span className="tag-unit">Guests</span>
                </div>
                <div className="tag-item tag-bed">
                  <span>5</span> <span className="tag-unit">Beds</span>
                </div>
                <div className="tag-item tag-bathroom">
                  <span>4</span> <span className="tag-unit">Bathroom</span>
                </div>
              </div>
              <div className="pro-desc">
                Double Suite rộng 150m² với thiết kế trong suốt, nằm ở tầng cao nhất của khách sạn, mang đến tầm nhìn toàn cảnh tuyệt đẹp...
              </div>
              <div className="btn_ev">
                <a href="#">
                  <span>Xem chi tiết
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 490.8 490.8">
                      <g>
                        <path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z" fill="#f44336"></path>
                        <path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z" fill="#000000"></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </a>
      </li>
      {/* Các mục homestay khác ở đây */}
    </ul>
  </div>
</div>

{/* <!-- show homstay  -->
<!-- service --> */}
        <div class="bg_service">
            <div class="min_warp2">
                <div class="row_warp">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="item-icon">
                                <img src="//theme.hstatic.net/200000909393/1001269498/14/home_service_img_1.jpg?v=2537" alt="Dịch vụ đưa đón tại sân bay"></img>
                            </div>
                            <div class="item-detail">
                                <h3 class="detail-title">Dịch vụ đưa đón tại sân bay</h3>
                                <p class="detail-desc">Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>                
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="item-icon">
                                <img src="//theme.hstatic.net/200000909393/1001269498/14/home_service_img_2.jpg?v=2537" alt="Dịch vụ quản gia"></img>
                            </div>
                            <div class="item-detail">
                                <h3 class="detail-title">Dịch vụ quản gia</h3>
                                <p class="detail-desc">Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>      
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="item-icon">
                                <img src="//theme.hstatic.net/200000909393/1001269498/14/home_service_img_3.jpg?v=2537" alt="Wifi &amp; Internet"></img>
                            </div>
                            <div class="item-detail">
                                <h3 class="detail-title">Wifi &amp; Internet</h3>
                                <p class="detail-desc">Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>       
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="item-icon">
                                <img src="//theme.hstatic.net/200000909393/1001269498/14/home_service_img_4.jpg?v=2537" alt="Dịch vụ giặt ủi"></img>
                            </div>
                            <div class="item-detail">
                                <h3 class="detail-title">Dịch vụ giặt ủi</h3>
                                <p class="detail-desc">Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>           
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="item-icon">
                                <img src="//theme.hstatic.net/200000909393/1001269498/14/home_service_img_5.jpg?v=2537" alt="Bữa sáng tại phòng"></img>
                            </div>
                            <div class="item-detail">
                                <h3 class="detail-title">Bữa sáng tại phòng</h3>
                                <p class="detail-desc">Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>              
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="item-icon">
                                <img src="//theme.hstatic.net/200000909393/1001269498/14/home_service_img_6.jpg?v=2537" alt="Chỗ đậu xe riêng"></img>
                            </div>
                            <div class="item-detail">
                                <h3 class="detail-title">Chỗ đậu xe riêng</h3>
                                <p class="detail-desc">Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="bg_blog row8">
            <div className="min_warp2">
                <div className="heading_title" data-aos="fade-up" data-aos-duration="1500">
                    <p className="title1">Hơn cả cảnh núi non</p>
                    <h2 className="title2 show_room">Trải nghiệm không thể quên</h2>
                </div>
                <div className="row2 list-blog justify-content-between align-items-center wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                    <article className="item-blog blog--1">
                        <a href="XXXX" title="Paddling Tour" aria-label="Paddling Tour">
                            <div className="article-loop item-article" style={{ backgroundImage: 'url(https://file.hstatic.net/200000909393/article/img-69-800x600-1_3f16d7045e9a4dd49d5acc42384a3d5f.jpg)' }}>
                                <div className="item-pd">
                                    <div className="media-article">
                                        <img className="opcti0 ls-is-cached lazyloaded" data-src="//file.hstatic.net/200000909393/article/img-69-800x600-1_3f16d7045e9a4dd49d5acc42384a3d5f_grande.jpg" alt="Paddling Tour" src="/image/index1.png" />
                                        <time dateTime="2024-08-22">22 Tháng 08, 2024</time>
                                    </div>
                                    <div className="info-article">
                                        <div className="title-article">
                                            <h4 className="tittle_camnang">Paddling Tour</h4>
                                        </div>
                                        <div className="short-article">
                                            Banff National Park’s biggest lake allows you to paddle for miles and enjoy breathtaking views. Lorem ipsum dolor...
                                        </div>
                                        <div className="btn_ev camnang">
                                            <a href="#">
                                                <span className="clo_white">Xem thêm
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 490.8 490.8" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                                        <g>
                                                            <path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z" fill="#f44336" />
                                                            <path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z" fill="#000000" />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="item-blog blog--2">
                        <div className="article-loop item-article" style={{ backgroundImage: 'url(https://file.hstatic.net/200000909393/article/img-68_93702bac2c97447b9475c6bb07a485d8.jpg)' }}>
                            <div className="media-article">
                                <a href="/blogs/news/mountain-hiking" title="Mountain Hiking" aria-label="Mountain Hiking">
                                    <img className="ls-is-cached lazyloaded" data-src="https://file.hstatic.net/200000909393/article/img-68_93702bac2c97447b9475c6bb07a485d8.jpg" alt="Mountain Hiking" src="https://file.hstatic.net/200000909393/article/img-68_93702bac2c97447b9475c6bb07a485d8.jpg" />
                                    <time dateTime="2024-08-22">22 Tháng 08, 2024</time>
                                </a>
                            </div>
                            <div className="info-article">
                                <div className="title-article">
                                    <h4 className="tittle_camnang">
                                        <a href="XXXX">Mountain Hiking</a>
                                    </h4>
                                </div>
                                <div className="short-article">
                                    With over 1,600 kilometres (994 miles) of trails, Banff National Park offers adventurers some of the best hiking...
                                </div>
                                <div className="btn_ev camnang">
                                    <a href="#">
                                        <span>Xem chi tiết
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 490.8 490.8" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                                <g>
                                                    <path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z" fill="#f44336" />
                                                    <path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z" fill="#000000" />
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="item-blog blog--3">
                        <div className="article-loop item-article" style={{ backgroundImage: 'url(https://file.hstatic.net/200000909393/article/img-70_23537e350baa48c5b65a977c872d0b09.jpg)' }}>
                            <div className="media-article">
                                <a href="/blogs/news/camping-tour" title="Camping Tour" aria-label="Camping Tour">
                                    <img className="ls-is-cached lazyloaded" data-src="https://file.hstatic.net/200000909393/article/img-70_23537e350baa48c5b65a977c872d0b09.jpg" alt="Camping Tour" src="https://file.hstatic.net/200000909393/article/img-70_23537e350baa48c5b65a977c872d0b09.jpg" />
                                    <time dateTime="2024-08-22">22 Tháng 08, 2024</time>
                                </a>
                            </div>
                            <div className="info-article">
                                <div className="title-article">
                                    <h4 className="tittle_camnang">
                                        <a href="#">Camping Tour</a>
                                    </h4>
                                </div>
                                <div className="short-article">
                                    Camping offers an immersive experience to enjoy nature and the great outdoors. Discover the best camping spots...
                                </div>
                                <div className="btn_ev camnang">
                                    <a href="#">
                                        <span>Xem chi tiết
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 490.8 490.8" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                                <g>
                                                    <path d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z" fill="#f44336" />
                                                    <path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z" fill="#000000" />
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    </div>
</main>
  );
}
export default Trangchu;