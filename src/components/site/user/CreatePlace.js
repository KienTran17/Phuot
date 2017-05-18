import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import './../../../../public/asset/js/fileinput';
import './../../../../public/asset/js/fileinput.min';
import './../../../../public/asset/js/bootstrap_modal.min';


class CreatePlace extends Component {
    componentDidMount() {
        $('#file-3').fileinput({
            showUpload: false,
            showCaption: false,
            browseClass: "btn btn-primary btn-lg",
            fileType: "any",
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            overwriteInitial: false,
            initialPreviewAsData: true
        })
    }
    render() {
        return (
            <div id="content-block">
                <div className="container be-detail-container">
                    <form action="/insertPlace" className="form-horizontal" method="POST" encType="multipart/form-data">
                        <div className="row">
                            <div className="col-xs-12 col-md-8 left-feild">
                                <div style={{ backgroundColor: 'rgb(183, 211, 250)' }} className="container">
                                    <div style={{ textAlign: 'center' }} className="header-page">
                                        <br />
                                        <span>
                                            <h2><i className="fa fa-heart" /> THÊM ĐỊA ĐIỂM</h2>
                                            <span style={{ fontStyle: 'italic' }}>Những địa điểm - cảnh đẹp bạn đã khám phá chưa có trên ĐiPhượt.com ? Cùng nhau chia sẻ nào!</span>
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="col-xs-12 col-md-10">
                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Tên địa điểm</label>
                                            <div className="col-sm-9">
                                                <input required="Nhập tên địa điểm" maxLength={100} id="txtNamePlace" type="text" className="form-control" ref="txtNamePlace" placeholder="Tên địa điểm" />
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valName" />
                                                <br />
                                            </div>
                                            <label className="col-sm-3 control-label">Loại hình phượt</label>
                                            <div className="col-sm-9">
                                                <div className="form-checkbox">
                                                    <label className="checkbox-inline">
                                                        <input id="cbTreckking" ref="cbTreckking" type="checkbox" />Treckking
                          </label>
                                                    <label className="checkbox-inline">
                                                        <input id="camping" ref="camping" type="checkbox" />Cắm trại
                          </label>
                                                    <label className="checkbox-inline">
                                                        <input id="seeView" ref="seeView" type="checkbox" />Ngắm cảnh
                          </label>
                                                    <label className="checkbox-inline">
                                                        <input id="cbClaimb" ref="cbClaimb" type="checkbox" />Leo núis
                          </label>
                                                </div>
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valCheckbox" />
                                                <br />
                                            </div>
                                            <label className="col-sm-3 control-label">Địa chỉ</label>
                                            <div className="col-sm-9">
                                                <input maxLength={100} required="Nhập địa chỉ" id="txtAddress" type="text" className="form-control" ref="txtAddress" placeholder="Địa chỉ" />
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valAddress" />
                                                <input placeholder="Search địa điểm" id="input" type="text" className="col-sm-4" style={{ fontFfamily: "Comic Sans MS, cursive, sans-serif", fontSize: "13pt", margin: "10px", border: "1px solid transparent", borderRadius: "2px 0 0 2px", boxSizing: "border-box" }}
                                                />
                                                <br />
                                            </div>
                                            <div className="row">
                                                <label htmlFor="inputPassword" className="col-sm-3 control-label">Tỉnh thành</label>
                                                <div className="col-sm-2">
                                                    <select id="ddlCity" ref="cityId" className="content  control-label">
                                                        <option value={0}>Tỉnh/ Thành Phố</option>

                                                    </select>
                                                    <br />
                                                </div>
                                                <br />
                                                <div className="col-sm-2">
                                                    <select id="ddlProvinces" ref="provinceId" className="content  control-label">
                                                        <option value={0}>Quận/ Huyện</option>
                                                    </select>
                                                </div>
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valCity" />
                                            </div>
                                            <br />
                                            <label className="col-sm-3 control-label">Map</label>
                                            <div className="col-sm-9" id="map" style={{ marginBottom: 20, height: 300 }}>
                                            </div>
                                            <label htmlFor="inputPassword" className="col-sm-3 control-label">Vị trí tọa độ</label>
                                            <div className="col-sm-4">
                                                <input className="form-control" ref="lat" required id="lat" disabled type="text" placeholder="latidude" />
                                            </div>
                                            <div className="col-sm-4">
                                                <input className="form-control" ref="lng" required id="lng" disabled type="text" placeholder="longitude" />
                                                <br />
                                            </div>
                                            <label className="col-sm-3 control-label">Mô tả địa điểm</label>
                                            <div className="col-sm-9">
                                                <textarea rows={3} required="Nhập mô tả địa điểm" id="txtDesPlace" className="form-control" ref="txtDesPlace" placeholder="Mô tả địa điểm" defaultValue={""} />
                                                <span style={{ color: 'red', fontStyle: 'italic' }} id="valDesc" />
                                            </div>
                                            <label className="col-sm-3" />
                                            <h4 className="col-sm-9 " style={{ textAlign: 'center', color: 'black', fontStyle: 'italic', fontWeight: 'bold' }} id="valAddress">
                                                Bạn hãy chọn những hình ảnh đẹp mà bạn ăn ý nhất để upload nhé!
                      </h4>
                                            <label className="col-sm-3 control-label">Thêm hình ảnh</label>
                                            <div id="addFile" className="col-sm-9">
                                                <input id="file-3" type="file" ref="image" multiple />
                                                <br />
                                            </div>
                                            <div style={{ marginBottom: 10, textAlign: 'right' }} className="col-sm-12">
                                                <input className="btn color-1 size-1 hover-1" id="btnSentPlace" type="submit" defaultValue="Gửi bài" />
                                                <a style={{ marginLeft: 10 }} className="btn color-3 size-1 hover-5" href="../">Thoát</a>
                                                <br />
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*// <div class="col-xs-12 col-md-8">
          //   aksdflsad
          // </div>*/}
                        </div>

                    </form>
                </div>

            </div>
        );
    }

}
export default connect(state => ({ isAuthen: state.isAuthen }))(CreatePlace)