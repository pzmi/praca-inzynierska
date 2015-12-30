var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "12000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "248",
        "ok": "248",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22763",
        "ok": "22763",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2921",
        "ok": "2921",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2162",
        "ok": "2162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2460",
        "ok": "2460",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3632",
        "ok": "3628",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7104",
        "ok": "7101",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10849",
        "ok": "10849",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1235,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1088,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9677,
        "percentage": 81
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "114.718",
        "ok": "114.718",
        "ko": "-"
    }
},
contents: {
"req_file-8c7dd": {
        type: "REQUEST",
        name: "file",
path: "file",
pathFormatted: "req_file-8c7dd",
stats: {
    "name": "file",
    "numberOfRequests": {
        "total": "12000",
        "ok": "12000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "248",
        "ok": "248",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22763",
        "ok": "22763",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2921",
        "ok": "2921",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2162",
        "ok": "2162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2461",
        "ok": "2461",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3632",
        "ok": "3631",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7101",
        "ok": "7101",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10849",
        "ok": "10849",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1235,
        "percentage": 10
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1088,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9677,
        "percentage": 81
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "114.718",
        "ok": "114.718",
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
