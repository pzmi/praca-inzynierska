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
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1161",
        "ok": "1161",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles1": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "percentiles2": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1002",
        "ok": "1001",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1102",
        "ok": "1102",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7823,
        "percentage": 78
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2177,
        "percentage": 22
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.743",
        "ok": "99.743",
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
        "total": "219",
        "ok": "219",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1161",
        "ok": "1161",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles1": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "percentiles2": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1002",
        "ok": "1001",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1102",
        "ok": "1102",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7823,
        "percentage": 78
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2177,
        "percentage": 22
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.743",
        "ok": "99.743",
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
