var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(
        [
            {
                "youtubeURL": "https://www.youtube.com/embed/rlj3gH0uFi8",
                "divdata": [
                    "https://www.zoominfo.com/assets/images/aboutPage/sales.svg",
                    "Sales",
                    "Our sales culture is collaborative with a healthy dose of competitive spirit."
                ],
                "companyRevenue": 2555333
            },
            {
                "youtubeURL": "https://www.youtube.com/embed/k33wQ4CJge8",
                "divdata": [
                    "https://www.zoominfo.com/assets/images/aboutPage/marketing.svg",
                    "Marketing",
                    "Creative and strategic professionals driven to set sales up for success."
                ],
                "companyRevenue": 2555333
            },
            {
                "youtubeURL": "https://www.youtube.com/embed/o6YTSj3nkNg",
                "divdata": [
                    "https://www.zoominfo.com/assets/images/aboutPage/engineering.svg",
                    "Engineering",
                    "The best and brightest in the field doing groundbreaking work everyday."
                ],
                "companyRevenue": 2555333
            }
        ]
    );
});

module.exports = router;