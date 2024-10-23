import React from 'react';
// import 'swiper/swiper-bundle.min.css'; // Import CSS của Swiper nếu cần

const EventSection = () => {
  return (
<div className="container">
  <main>
    <div className="banner">
      <div className="wap_name_dt_rr">
        <div className="min_warp2">
          <div className="name_menu_date_restaurant" data-aos="fade-up" data-aos-duration="3000">
            <p className="name_menu">Nơi hoàn hảo để tổ chức</p>
            <h1 className="restaurant">Tiệc & Sự kiện</h1>
            <p className="date">
              Tổ chức các sự kiện quan trọng cùng bạn bè và gia đình là một trong những niềm vui lớn nhất của cuộc sống.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="section_menu">
      {/* water menu */}
      <div className="water_menu">
        <div className="min_warp2">
          <div className="row1">
            <div className="heading_title mg8" data-aos="fade-up" data-aos-duration="1500">
              <p className="title1">Những sự kiện đặc biệt</p>
              <h2 className="title2">Tổ chức sự kiện của bạn tại Maple Inn</h2>
              <p className="heading_desc">
                Đội ngũ sự kiện năng động, hiệu quả và giàu kinh nghiệm của chúng tôi sẽ điều chỉnh mọi chi tiết theo nhu cầu
                của bạn, từ dịch vụ ăn uống đẳng cấp thế giới đến hoạt động giải trí được lên kế hoạch cẩn thận. Tất cả những
                gì bạn cần làm là nâng ly và tận hưởng khoảnh khắc. Để đặt chỗ hoặc biết thêm thông tin về các sự kiện, vui
                lòng liên hệ với chúng tôi.
              </p>
              <div className="contac_heading">
                <div className="btn-more text-center">
                  <a href="#">
                    <button className="ocean-button" id="oceanButton">
                      <i className="fa-solid fa-phone"></i> 0967400391
                    </button>
                  </a>
                </div>
                <div className="btn-more text-center">
                  <a href="#">
                    <button className="ocean-button" id="oceanButton">
                      <i className="fa-solid fa-envelope"></i> docongdanh357@gmail.com
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* event group */}
      <div className="event_group">
        <div className="min_warp2">
          <div className="row2">
            <div className="col-lg-5">
              <div className="banner_img_event" data-aos="fade-up" data-aos-duration="2100">
                <a href="#">
                  <img src="/image/ev1.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-5 pd_ev">
              <div className="content_event">
                <div className="heading-title">
                  <p className="title5">Họp và Làm việc</p>
                  <h2 className="title6">Không gian họp phong cách</h2>
                  <p className="heading-desc-ev">
                    Với hơn 1000m vuông không gian sự kiện linh hoạt, đội ngũ Sự kiện Đặc biệt của chúng tôi ở đây để giúp bạn
                    tạo ra một sự kiện thực sự đặc biệt.
                  </p>
                  <div className="btn_ev">
                    <a href="#">
                      <span>Liên hệ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat rows */}
          <div className="row3">
            <div className="col-lg-5">
              <div className="banner_img_event" data-aos="fade-up" data-aos-duration="2100">
                <a href="#">
                  <img src="/image/ev1.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-5 pd_ev">
              <div className="content_event">
                <div className="heading-title">
                  <p className="title5">Họp và Làm việc</p>
                  <h2 className="title6">Không gian họp phong cách</h2>
                  <p className="heading-desc-ev">
                    Với hơn 1000m vuông không gian sự kiện linh hoạt, đội ngũ Sự kiện Đặc biệt của chúng tôi ở đây để giúp bạn
                    tạo ra một sự kiện thực sự đặc biệt.
                  </p>
                  <div className="btn_ev">
                    <a href="#">
                      <span>Liên hệ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More repeating rows */}
          <div className="row4">
            <div className="col-lg-5">
              <div className="banner_img_event" data-aos="fade-up" data-aos-duration="2100">
                <a href="#">
                  <img src="/image/ev1.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-5 pd_ev">
              <div className="content_event">
                <div className="heading-title">
                  <p className="title5">Họp và Làm việc</p>
                  <h2 className="title6">Không gian họp phong cách</h2>
                  <p className="heading-desc-ev">
                    Với hơn 1000m vuông không gian sự kiện linh hoạt, đội ngũ Sự kiện Đặc biệt của chúng tôi ở đây để giúp bạn
                    tạo ra một sự kiện thực sự đặc biệt.
                  </p>
                  <div className="btn_ev">
                    <a href="#">
                      <span>Liên hệ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* img slide */}
      <div className="row1">
        <div className="swiper mySwiper" data-aos="fade-up" data-aos-duration="2700">
          <div className="swiper-wrapper">
            <div className="swiper-slide" id="swiper1">
              <figure>
                <img src="/image/ev1.png" alt="" />
              </figure>
            </div>
            <div className="swiper-slide" id="swiper1">
              <figure>
                <img src="/image/ev1.png" alt="" />
              </figure>
            </div>
            <div className="swiper-slide" id="swiper1">
              <figure>
                <img src="/image/ev1.png" alt="" />
              </figure>
            </div>
            <div className="swiper-slide" id="swiper1">
              <figure>
                <img src="/image/ev1.png" alt="" />
              </figure>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </main>
</div>

  );
};

export default EventSection;
