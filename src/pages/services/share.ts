import { Injectable } from '@angular/core'
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions , URLSearchParams , Response } from '@angular/http';
@Injectable()
export class ShareService {
     
    user:string;
    token:any;
    view:any;
    adId:any;
    redeemBadge:any;
    public settings = [];
    public savedPoints = [];
    public successData = [];
    constructor() {
    this.token = "";
    this.adId = 0;
    this.redeemBadge = null;
    }
  
    setProfile(user) {
        this.user = user;
    }
  
    getProfile() {
        return this.user;
    
    }  
 
    setToken(token){
        this.token = token;
    }
    getToken(){
        return this.token;
    }
 
    setViewDone(view){
        this.view = view;
    }
    getViewDone(){
        return this.view;
    }
    setIndex(adId){
        this.adId = adId;
    }
    getIndex(){
        return this.adId;
    }
    
    setSettingsData(settings){
     this.settings = settings;
    }
    getSettingsData(){
    return this.settings;
    }

    setRedeemBadge(redeemBadge){
     this.redeemBadge = redeemBadge;
    }
    getRedeemBadge(){
    return this.redeemBadge;
    }
    setSavedPoints(savedPoints){
     this.savedPoints = savedPoints;
    }
    getSavedPoints(){
    return this.savedPoints;
    }

    setSuccessData(successData){
        this.successData = successData;
    }
    getSuccessData(){
        return this.successData;
    }

}