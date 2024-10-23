import React, { useState } from 'react';
import './ChiTiet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { FaAngleDown } from "react-icons/fa";

const ChiTiet = () => {
    const [checkInDate, setCheckInDate] = useState(new Date("2024-10-22"));
    const [checkOutDate, setCheckOutDate] = useState(new Date("2024-10-23"));
    // const [roomQty, setRoomQty] = useState(1);
    // const [adultQty, setAdultQty] = useState(1);
    // const [childQty, setChildQty] = useState(0);

    // const incrementRoom = () => {
    //     if (roomQty < 3) setRoomQty(roomQty + 1);
    // };

    // const decrementRoom = () => {
    //     if (roomQty > 1) setRoomQty(roomQty - 1);
    // };

    // const incrementAdult = () => {
    //     if (adultQty < 10 - childQty) setAdultQty(adultQty + 1);
    // };

    // const decrementAdult = () => {
    //     if (adultQty > 1) setAdultQty(adultQty - 1);
    // };

    // const incrementChild = () => {
    //     if (childQty < 10 - adultQty) setChildQty(childQty + 1);
    // };

    // const decrementChild = () => {
    //     if (childQty > 0) setChildQty(childQty - 1);
    // };

    return (
        <div className="layout-c layout-pageProduct">
            <section className="productDetail-information">
                <div className="productDetail--main">
                    <div className="productDetail--gallery">
                        <div className="product-container-gallery">
                            <div className="wrapbox-gallery">
                                <div className="wrapbox-image">
                                    <div className="productGallery_slider">
                                        <div className="gallery">
                                            <div className="large">
                                                <img src="https://product.hstatic.net/200000909393/product/clay-banks-w9wv2hwz9si-unsplash-780x520_289750de40bc43d98e837ba009d8e8e9_master.jpg" alt="" className="w-full h-full"/>
                                            </div>
                                            <div className="small">
                                                <img src="https://product.hstatic.net/200000909393/product/clay-banks-zqmsq8ntbvm-unsplash-780x520_4a119b1f9df64c1f85f0d614a7d34f4c_master.jpg" alt="" className="w-full h-full"/>
                                            </div>
                                            <div className="small">
                                                <img src="https://product.hstatic.net/200000909393/product/andrea-davis-iwfe63thjxk-unsplash-768x512_2cadb59020fc412a8d87816448f7e18b_master.jpg" alt="" className="w-full h-full"/>
                                            </div>
                                            <div className="small">
                                                <img src="https://product.hstatic.net/200000909393/product/clay-banks-dbj0gcem_bg-unsplash-780x520_a1e479300a604fbaae19aa0f389f7796_master.jpg" alt="" className="w-full h-full"/>
                                            </div>
                                            <div className="small">
                                                <img src="https://product.hstatic.net/200000909393/product/hans-isaacson-bqtvojhrko0-unsplash-780x520_208fd0ec8f86415daf71b32983e987dc_master.jpg" alt="Living room with wooden walls and hanging fireplace" className="w-full h-full"/>
                                            </div>
                                        </div>
                                        <div className="icon-gallery pc-show mb-show">
                                            <span>Xem tất cả ảnh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="productDetail--content">
                            <div className="wrapbox-inner">
                                <div className="d-flex flex-wrap">
                                    <div className="col-lg-8 col-md-12 col-12 wrapbox-left">
                                        <div className="product-heading">
                                            <h1>Double Suite</h1>
                                            <div className="pro-tag">
                                                <div className="tag-item tag-area"><span>150</span> <span className="tag-unit">m<sup>2</sup></span></div>
                                                <div className="tag-item tag-guests"><span>10</span> <span className="tag-unit">Guests</span></div>
                                                <div className="tag-item tag-bed"><span>5</span> <span className="tag-unit">Beds</span></div>
                                                <div className="tag-item tag-bathroom"><span>4</span> <span className="tag-unit">Bathroom</span></div>
                                            </div>
                                        </div>
                                        <div className="wrapbox-detail">
                                            <div className="content-desc">
                                                <div className="productDetail--box box -detail-description mg-top">
                                                    <div className="product-description">
                                                        <div className="description-content expandable-toggle opened">
                                                            <div className="description-productdetail">
                                                                <p>Double Suite rộng 150m² với thiết kế trong suốt, nằm ở tầng cao nhất của khách sạn, mang đến tầm nhìn toàn cảnh tuyệt đẹp ra hồ Xuân Hương...</p>
                                                                <p>Các phòng tại khách sạn được trang bị khu vực ghế ngồi, TV màn hình phẳng có truyền hình cáp, phòng tắm riêng, đồ vệ sinh cá nhân miễn phí và vòi xịt/chậu rửa vệ sinh. Các phòng đều đi kèm với ấm đun nước, trong đó một số phòng có ban công và một số khác thì nhìn ra thành phố. </p>
                                                                <p>Tại Maple Inn, tất cả các phòng đều được thiết kế có ga trải giường và khăn tắm. </p>
                                                                <p>Khách có thể thưởng thức bữa sáng thực đơn à la carte, kiểu lục địa hoặc kiểu Á tại chỗ nghỉ. </p>
                                                                <p>Leo núi và đi xe đạp là hoạt động được ưa chuộng trong khu vực. Ngoài ra, Maple Inn có dịch vụ thuê ô tô. </p>
                                                                <p>Chỗ nghỉ cách Quảng trường Lâm Viên 2.3 km và Hồ Xuân Hương 2.4 km. Sân bay gần nhất là Sân bay Liên Khương.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-lg-4 col-md-12 col-12 wrapbox-right" id="form-booking-pro">
                                        <div className="wrapbox-detail">
                                            <div className="product-price" id="price-preview">
                                                <span className="pro-title">Đặt phòng: </span>
                                                <div className="pro-price no-sale">
                                                    <div className="percent-price">
                                                        <span className="price">3,200,000₫<span className="person">/ Đêm</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <div className="product-variants hidden" style={{ display: 'none' }}>
                                                <form id="add-item-form" action="" method="post" className="variants clearfix">
                                                    <div className="select clearfix" style={{ display: 'none' }}>
                                                        <select id="product-select" name="id" style={{ display: 'none' }}>
                                                            <option value="1128215632">Default Title - 3,200,000₫</option>
                                                        </select>
                                                    </div>
                                                   
                                                </form>
                                            </div>
                                            <div className="form-booking">
                                                <form id="formbooking" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfJOblQa_xzuTB8Gq5HRvzspVC8EEvAUpxcEL_QCYx-3-mx-g/formResponse" data-shop="Maple Inn">
                                                    <div className="contact-form">
                                                        <div className="row">
                                                            <div className="col-sm-12 col-xs-12">
                                                                <div className="input-group">
                                                                    <input required type="text" name="entry.1773600104" id="full_name" data-valid="full_name" className="form-control" placeholder="Tên của bạn" aria-describedby="basic-addon1" />
                                                                </div>
                                                                <p className="full_name-validation field-error"></p>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12">
                                                                <div className="input-group">
                                                                    <input pattern="[0-9]{10,12}" required type="text" name="entry.195991160" id="your_phone" data-valid="your_phone" className="form-control" placeholder="Số điện thoại" aria-describedby="basic-addon1" />
                                                                </div>
                                                                <p className="your_phone-validation field-error"></p>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12">
                                                                <div className="input-group">
                                                                    <input required type="text" name="entry.597310941" id="your_email" data-valid="your_email" className="form-control" placeholder="Email" aria-describedby="basic-addon1" />
                                                                </div>
                                                                <p className="your_email-validation field-error"></p>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12">
                                                                <div className="pro-datepicker t-datepicker">
                                                                    <div className="pro-item pro-when pro-checkin">
                                                                        <div className="pro-form">
                                                                            <label>Ngày nhận phòng</label>
                                                                            <div className="t-check-in">
                                                                                <DatePicker
                                                                                    selected={checkInDate}
                                                                                    onChange={(date) => setCheckInDate(date)}
                                                                                    dateFormat="dd/MM/yyyy"
                                                                                    className="t-input-check-in"
                                                                                />
                                                                              
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="pro-item pro-when pro-checkout">
                                                                        <div className="pro-form">
                                                                            <label>Ngày trả phòng</label>
                                                                            <div className="t-check-out">
                                                                                <DatePicker
                                                                                    selected={checkOutDate}
                                                                                    onChange={(date) => setCheckOutDate(date)}
                                                                                    dateFormat="dd/MM/yyyy"
                                                                                    className="t-input-check-out"
                                                                                />
                                                                   
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <input type="hidden" name="entry.1366726942" value={checkInDate.toLocaleDateString("en-GB")} />
                                                                    <input type="hidden" name="entry.1192184549" value={checkOutDate.toLocaleDateString("en-GB")} />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12">
                                                                <div className="pro-item pro-qty">
                                                                    <div className="pro-form">
                                                                        <div className="group-dropdown-qty">
                                                                            <div className="qty-title">
                                                                                <label>Số phòng</label>
                                                                                <div className="val-qty" id="val-room-qty"><span id="pro-room-qty">1</span></div>
                                                                                <span className="icon-down"><i className="fa fa-angle-down"></i></span>
                                                                            </div>
                                                                            <div className="dropdown-qty">
                                                                                <div className="dropdown-group">
                                                                                    <span className="dropdown-title">Số phòng</span>
                                                                                    <div className="group-qty">
                                                                                        <button type="button"  className="qty-btn qty-btn-minus disabled" disabled></button>
                                                                                        <input type="text" id="pro-room-qty" name="entry.2030156426" value="1" min="1" maxLength="3" className="pro-input-qty" data-limit="3" />
                                                                                        <button type="button"  className="qty-btn qty-btn-plus"></button>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="note-notify note-room-qty hidden">Số phòng tối đa là 3</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6 adult-qty">
                                                                <div className="pro-item pro-qty">
                                                                    <div className="pro-form">
                                                                        <div className="group-dropdown-qty">
                                                                            <div className="qty-title">
                                                                                <label>Người lớn</label>
                                                                                <div className="val-qty" id="val-adult-qty"><span id="pro-adult-qty">1</span></div>
                                                                                <span className="icon-down"><i className="fa fa-angle-down"></i></span>
                                                                            </div>
                                                                            <div className="dropdown-qty">
                                                                                <div className="dropdown-group">
                                                                                    <div className="group-qty">
                                                                                        <button type="button"  className="qty-btn qty-btn-minus disabled" disabled></button>
                                                                                        <input type="text" id="pro-adult-qty" name="entry.1503121717" value="1" min="1" maxLength="3" className="pro-input-qty" data-limit="10" />
                                                                                        <button type="button"  className="qty-btn qty-btn-plus"></button>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="note-notify note-total-qty hidden">Tổng số Người lớn và Trẻ em tối đa là <span className="total-qty">10</span> </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6 child-qty">
                                                                <div className="pro-item pro-qty">
                                                                    <div className="pro-form">
                                                                        <div className="group-dropdown-qty">
                                                                            <div className="qty-title">
                                                                                <label>Trẻ em</label>
                                                                                <div className="val-qty" id="val-child-qty"><span id="pro-child-qty">0</span></div>
                                                                                <span className="icon-down"><i className="fa fa-angle-down"></i></span>
                                                                            </div>
                                                                            <div className="dropdown-qty">
                                                                                <div className="dropdown-group">
                                                                                    <div className="group-qty">
                                                                                        <button type="button"  className="qty-btn qty-btn-minus disabled" disabled></button>
                                                                                        <input type="text" id="pro-child-qty" name="entry.1524891559" value="0" min="0" maxLength="3" className="pro-input-qty" data-limit="10" />
                                                                                        <button type="button"  className="qty-btn qty-btn-plus"></button>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="note-notify note-total-qty hidden">Tổng số Người lớn và Trẻ em tối đa là <span className="total-qty">10</span> </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12">
                                                                <input type="hidden" id="link_pro" name="entry.1473149859" value="https://maple-inn.myharavan.com/products/double -suite" />
                                                                <div className="pro-total">
                                                                    <label>Tổng cộng: </label>
                                                                    <div className="pro-num-total" data-price="320000000"> 
                                                                        3,200,000₫
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12">
                                                                <div className="addcart-area">						
                                                                    <button type="button" id="pro-booking-room" className=" add-to-cartProduct button dark btn-addtocart addtocart-modal" name="add"> 
                                                                        Đặt phòng ngay 
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChiTiet;

