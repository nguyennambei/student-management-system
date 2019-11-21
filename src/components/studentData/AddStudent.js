import React from 'react';

export default function AddStudent(){
    return(
        <div>
        <h3>学生情報を追加</h3>
        <div className="container">
            <form>
                <div className="form-group row">
                    <label for="staticName" className="col-sm-2 col-form-label">名前</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticName" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticNameJP" className="col-sm-2 col-form-label">フリガナ</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticNameJP" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticCountry" className="col-sm-2 col-form-label">国籍</label>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" id="staticCountry" />
                    </div>
                    <label for="staticCountry" className="col-sm-2 col-form-label">誕生日</label>
                    <div className="col-sm-1">
                        <input type="text" className="form-control" id="staticCountry" />
                    </div>
                    <label for="staticCountry" className="col-sm-1 col-form-label">年</label>
                    <div className="col-sm-1">
                        <input type="text" className="form-control" id="staticCountry" />
                    </div>
                    <label for="staticCountry" className="col-sm-1 col-form-label">月</label>
                    <div className="col-sm-1">
                        <input type="text" className="form-control" id="staticCountry" />
                    </div>
                    <label for="staticCountry" className="col-sm-1 col-form-label">日</label>
                </div>
                <div className="form-group row">
                    <label for="staticPhone" className="col-sm-2 col-form-label">電話番号</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticPhone" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticAddress" className="col-sm-2 col-form-label">住所</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticAddress" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticAvatar" className="col-sm-2 col-form-label">学生の写真</label>
                    <div className="col-sm-10">
                        <input type="file" className="form-control-file" id="staticAvatar" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">送信</button>
            </form>
        </div>
        </div>
    );
}