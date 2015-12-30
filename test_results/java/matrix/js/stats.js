var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1418",
        "ok": "1418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "percentiles1": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "percentiles2": {
        "total": "210",
        "ok": "210",
        "ko": "-"
    },
    "percentiles3": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "percentiles4": {
        "total": "815",
        "ok": "815",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9897,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 83,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 20,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.785",
        "ok": "99.785",
        "ko": "-"
    }
},
contents: {
"req_matrix-21b72": {
        type: "REQUEST",
        name: "matrix",
path: "matrix",
pathFormatted: "req_matrix-21b72",
stats: {
    "name": "matrix",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1418",
        "ok": "1418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "percentiles1": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "percentiles2": {
        "total": "210",
        "ok": "210",
        "ko": "-"
    },
    "percentiles3": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "percentiles4": {
        "total": "815",
        "ok": "815",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9897,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 83,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 20,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.785",
        "ok": "99.785",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
