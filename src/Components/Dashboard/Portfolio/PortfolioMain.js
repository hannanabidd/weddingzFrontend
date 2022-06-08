import React, {useState, useEffect} from 'react';
import '../dashboard.css';
import FileUploadScreen from './FileUploadScreen';
import {getimgCover, getphotos} from './api';

function App() {
  const [imgCover, setimgCover] = useState([]);
  const [photos, setphotos] = useState([]);

  const getimgCoverlist = async () => {
    try {
        const fileslist = await getimgCover();
        setimgCover(fileslist);
    } catch (error) {
      console.log(error);
    }
  }
  const getphotosList = async () => {
    try {
        const fileslist = await getphotos();
        setphotos(fileslist);
        console.log(photos);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getimgCoverlist();
    getphotosList();
  }, []);
  return (
    <>
        <div className="container">
          <p className="text-port">Add Images to your Portfolio </p>
          <FileUploadScreen getsingle={() => getimgCoverlist()} getMultiple={() => getphotosList()}/>
       </div> 
       <div className="container mt-5">
         <div className="row">
           <div className="col-6">
             <h4 className="text-success font-weight-bold">Cover Image</h4>
             <div className="row">
                {imgCover.map((file, index) => 
                  <div className="col-6">
                    <div className="card mb-2 border-0 p-0">
                      <img src={`http://localhost:3001/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                      </div>
                  </div>
                )}
             </div>
           </div>
           <div className="col-6">
             <h4 className="text-success font-weight-bold">Portfolio Images</h4> 
             {photos.map((element, index) =>
                <div key={element._id}>
                    <h6 className="text-danger font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-6">
                            <div className="card mb-2 border-0 p-0">
                              <img src={`http://localhost:3001/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                              </div>
                          </div>
                       )}
                      </div>
                </div>
              )}
           </div>
         </div>
       </div>
    </>
  );
}

export default App;