const mainController = {
  home: function (req, res) {
    res.render("home", {
      title: "Home",
      style: "home",
    });
  },

  contact: function (req, res) {
    res.render("contact", {
      title: "Contact",
      style: "contact",
    });
  },

  whoIAm: function (req, res) {
    res.render("whoIAm", {
      title: "Who I Am",
      style: "whoIAm",
    });
  },

  studyAchivements: function (req, res) {
    res.render("studyAchivements", {
      title: "Study and Achivements",
      style: "studyAchivements",
    });
  },

  professionalProfile: function (req, res) {
    res.render("professionalProfile", {
      title: "Professional Profile",
      style: "professionalProfile",
    });
  },

  swot: function (req, res) {
    res.render("swot", {
      title: "SWOT",
      style: "swot",
    });
  },

  freeTime: function (req, res) {
    res.render("freeTime", {
      title: "Free Time",
      style: "freeTime",
    });
  },

  jobExpectations: function (req, res) {
    res.render("jobExpectations", {
      title: "Job Expectations",
      style: "jobExpectations",
    });
  },
  
};

module.exports = mainController;
