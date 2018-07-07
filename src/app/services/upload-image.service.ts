import { Injectable } from '@angular/core';

@Injectable()
export class UploadImageService{
  filesToUpload: Array<File>;
  constructor() { 
    this.filesToUpload = [];
  }

  
  uploadImagePatient(patientId: number) {
  	this.makeFileRequest("http://localhost:8088/patient/add/image?id="+patientId, [], this.filesToUpload).then((result) => {
  		console.log(result);
  	}, (error) => {
  		console.log(error);
  	});
  }
   uploadImageDoctor(doctorId: number) {
    this.makeFileRequest("http://localhost:8088/doctor/add/image?id="+doctorId, [], this.filesToUpload).then((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
  uploadImageAnalysis(AnalysisrId: number) {
    this.makeFileRequest("http://localhost:8088/Analysis/add/image?id="+AnalysisrId, [], this.filesToUpload).then((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

   modifyImagePatient(patientId: number) {
    console.log(this.filesToUpload);
    if (this.filesToUpload.length>0) {
      this.makeFileRequest("http://localhost:8088/patient/update/image?id="+patientId, [], this.filesToUpload).then((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
    }
  }
  modifyImageDoctor(doctorId: number) {
    console.log(this.filesToUpload);
    if (this.filesToUpload.length>0) {
      this.makeFileRequest("http://localhost:8088/doctor/update/image?id="+doctorId, [], this.filesToUpload).then((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
    }
  }

  fileChangeEvent(fileInput: any) {
  	this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
  	return new Promise((resolve, reject) => {
  		var formData:any = new FormData();
  		var xhr = new XMLHttpRequest();
  		for(var i=0; i<files.length;i++) {
  			formData.append("uploads[]", files[i], files[i].name);
  		}
  		xhr.onreadystatechange = function() {
  			if(xhr.readyState == 4) {
  				if(xhr.status==200) {
  					console.log("image uploaded successfully!");
  				} else {
  					reject(xhr.response);
  				}
  			}
  		}

  		xhr.open("POST", url, true);
  		xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
  		xhr.send(formData);
  	});
  }
}
