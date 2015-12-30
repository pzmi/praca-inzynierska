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
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21174",
        "ok": "21174",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3342",
        "ok": "3342",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2239",
        "ok": "2239",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2797",
        "ok": "2797",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3988",
        "ok": "3988",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7900",
        "ok": "7900",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11616",
        "ok": "11616",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 234,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 939,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10827,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "116.457",
        "ok": "116.457",
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
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21174",
        "ok": "21174",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3342",
        "ok": "3342",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2239",
        "ok": "2239",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2797",
        "ok": "2797",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3988",
        "ok": "3988",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7900",
        "ok": "7900",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11616",
        "ok": "11616",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 234,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 939,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10827,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "116.457",
        "ok": "116.457",
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
