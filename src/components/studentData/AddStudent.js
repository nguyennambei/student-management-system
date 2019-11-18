import React from 'react';

export default function AddStudent(){
    return(
        <div>
        <h3>学生情報を追加</h3>
        <div>
            <form>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticEmail" value="email@example.com" />
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}