const works = [{
    "title": "Tajneed UAE",
    "description": "Tajneed is the official recruitment application for the United Arab Emirates Armed Forces, designed to simplify and streamline the recruitment process for individuals interested in joining the UAE military.",
    "web": "https://tajneed.gov.ae/",
    "iOS": "https://apps.apple.com/ae/app/tajneed/id6517355120",
    "android": "https://play.google.com/store/apps/details?id=ae.mod.tajneed",
},
{
    "title": "IL Oneforce",
    "description": "IL OneForce is the perfect workplace companion for ICICI Lombard General Insurance Co. Ltd. This is a one-stop-shop solution designed to easily manage your team and support you in achieving your goals, whether you are an RM or a manager.",
    "web": "",
    "iOS": "",
    "android": "https://play.google.com/store/apps/details?id=icici.lombard.iloneteam&hl=en_IN",
},
{
    "title": "Finsights - Tally on Mobile",
    "description": "Access Your Tally Prime and Tally ERP 9 with Finsights Tally on Mobile App.",
    "web": "https://finsights.biz/tally-on-mobile/",
    "iOS": "https://apps.apple.com/in/app/finsights-for-tally/id1571729090",
    "android": "https://play.google.com/store/apps/details?id=com.finsights.finsights",
}
];


var str = '<ul class="alt">'

works.forEach(function (item) {
    str += `<li>
    <br>
    <h4>${item["title"]}</h4>
    <p>${item["description"]}</p>
    <h5>
    Available on: 
    ${item['android'] ? `<a href="${item['android']}" target="_blank" class="icon brands large fa-android"><span class="label">Android</span></a>` : ""}
    ${item['iOS'] ? `<a href="${item['iOS']}" target="_blank" class="icon brands large fa-apple"><span class="label">iOS</span></a>` : ""}
    ${item['web'] ? `<a href="${item['web']}" target="_blank" class="icon solid large fa-globe"><span class="label">Web</span></a>` : ""}
   
    </h5>
    </li> `;
});

str += '</ul>';
document.getElementById("myWorks").innerHTML = str;