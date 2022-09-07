const { Router } = require("express");
const router = Router();

const {
  home,
  whoIAm,
  studyAchivements,
  professionalProfile,
  freeTime,
  swot,
  jobExpectations,
  contact,
} = require("../controllers/main.controller");

router.get("/", home);

router.get("/whoIAm", whoIAm);

router.get("/studyAchivements", studyAchivements);

router.get("/professionalProfile",professionalProfile);

router.get("/swot", swot);

router.get("/freeTime", freeTime);

router.get("/jobExpectations", jobExpectations);

router.get("/contact", contact);

module.exports = router;
