const express = require("express")
const router = express.Router()
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")
const session = require("express-session");
const mongoose = require("mongoose")

module.exports.gethome = async (req,res)=>{ 
   
   //res.status(200).render('home',{no_recovered_cars:no_of_recoveries,no_of_users:no_of_users,data:data})
   res.status(200).render('page/home')
 
}
module.exports.getAbout = async (req,res)=>{ 
   
   //res.status(200).render('home',{no_recovered_cars:no_of_recoveries,no_of_users:no_of_users,data:data})
   res.status(200).render('page/about')
 
}

module.exports.getContact = async (req,res)=>{ 
   
   //res.status(200).render('home',{no_recovered_cars:no_of_recoveries,no_of_users:no_of_users,data:data})
   res.status(200).render('page/contact')
 
}

module.exports.getSingleAttorney = async (req,res)=>{ 
   
    res.status(200).render('attorneys/singleAttorney')
  
 }
 module.exports.getMultipleAttorney = async (req,res)=>{ 
   
    res.status(200).render('attorneys/multipleAttorney')
  
 }

 module.exports.alternative_dispute_resolution = async(req,res)=>{
    res.status(200).render('practise_area/alternative-dispute-resolution')
 }


 module.exports.civil_ligitation = async(req,res)=>{
    res.status(200).render('practise_area/civil-ligitation')
 }

 module.exports.family_law= async(req,res)=>{
   res.status(200).render('practise_area/family-law')
}

module.exports.real_estate_law= async(req,res)=>{
   res.status(200).render('practise_area/real-estate-law')
}

module.exports.construction_law= async(req,res)=>{
   res.status(200).render('practise_area/construction-law')
}

module.exports.probate_law= async(req,res)=>{
   res.status(200).render('practise_area/probate-law')
}

module.exports.real_property= async(req,res)=>{
   res.status(200).render('practise_area/real-property')
}
module.exports.business_law= async(req,res)=>{
   res.status(200).render('practise_area/business-law')
}

module.exports.elder_law= async(req,res)=>{
   res.status(200).render('practise_area/elder-law')
}


module.exports.track_case = async(req,res)=>{
   res.status(200).render('page/track')
}

module.exports.track_case_result = async(req,res)=>{
   res.status(200).render('page/track-result')
}

module.exports.new_case = async(req,res)=>{
   res.status(200).render('page/new-case')
}

