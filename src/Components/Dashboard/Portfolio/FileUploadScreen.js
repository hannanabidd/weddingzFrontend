import React, {useState, useEffect} from 'react';
import {imgCoverUpload, photosUpload} from './api';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const FileUploadScreen = (props) => {
    const [imgCover, setimgCover] = useState('');
    const [photos, setphotos] = useState('');
    const [singleProgress, setSingleProgress] = useState(0);
    const [multipleProgress, setMultipleProgress] = useState(0);

    const imgCoverChange = (e) => {
        setimgCover(e.target.files[0]);
        setSingleProgress(0);
    }
    const MultipleFileChange = (e) => {
        setphotos(e.target.files);
        setMultipleProgress(0);
    }
    const imgCoverOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }
    const mulitpleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        }
    }
    const uploadimgCover = async () => {
        const formData = new FormData();
        formData.append('file', imgCover);
        await imgCoverUpload(formData, imgCoverOptions);
        props.getsingle();
    }
    const Uploadphotos = async () => {
        const formData = new FormData();
        for (let i = 0; i < photos.length; i++) {
            formData.append('files', photos[i]);                      
        }
        await photosUpload(formData, mulitpleFileOptions);
        props.getMultiple();
    }
    return (
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label className="porfolio-label">Upload Cover Image</label><br/>
                    <input type="file" className="form-portfolio" accept="image/*" onChange={(e) => imgCoverChange(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="upload-btn" onClick={() => uploadimgCover()} >Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className="col-6">
                   <div className="row">
                      
                       <div className="col-12">
                        <div className="form-group">
                            <label className="porfolio-label">Upload Multiple Images for Portfolio</label><br/>
                            <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-portfolio" accept="image/*" multiple />
                        </div>
                       </div>
                   </div>                   
                    <div className="row">
                        <div className="col-10">
                            <button type="button" onClick={() => Uploadphotos()}  className="upload-btn">Upload</button>
                        </div>
                        <div className="col-2">
                        <CircularProgressbar
                            value={multipleProgress}
                            text={`${multipleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                    </div>
                </div>
        </div>
    );
}

export default FileUploadScreen;