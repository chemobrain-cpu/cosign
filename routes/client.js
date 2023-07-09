const express = require("express")
const router = express.Router()
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")


let gethome = require("../controller/client").gethome
let getAbout = require("../controller/client").getAbout
let getContact = require("../controller/client").getContact
let getSingleAttorney = require("../controller/client").getSingleAttorney
let getMultipleAttorney = require("../controller/client").getMultipleAttorney
let alternative_dispute_resolution = require("../controller/client").alternative_dispute_resolution
let civil_ligitation = require("../controller/client").civil_ligitation
let family_law = require("../controller/client").family_law
let real_estate_law = require("../controller/client").real_estate_law
let construction_law = require("../controller/client").construction_law
let probate_law = require("../controller/client").probate_law
let real_property = require("../controller/client").real_property
let business_law = require("../controller/client").business_law
let elder_law = require("../controller/client").elder_law
let track_case = require("../controller/client").track_case
let track_case_result = require("../controller/client").track_case_result
let new_case = require("../controller/client").new_case




router.get("/",gethome)
router.get('/about',getAbout)
router.get('/contact',getContact)
router.get('/contact-us',getContact)
router.get('/attorney-single',getSingleAttorney)
router.get('/attorney',getSingleAttorney)
router.get('/attorneys',getMultipleAttorney)
router.get('/alternative-dispute-resolution',alternative_dispute_resolution)
router.get('/civil-ligitation',civil_ligitation)
router.get('/family-law',family_law)
router.get('/real-estate-law',real_estate_law)
router.get('/construction-law',construction_law)
router.get('/probate-law',probate_law)
router.get('/real-property',real_property)
router.get('/business-law',business_law)
router.get('/elder-law',elder_law)
router.get('/track',track_case)
router.get('/track-case',track_case)
router.get('/track-result',track_case_result)
router.get('/new-case',new_case)



exports.router = router