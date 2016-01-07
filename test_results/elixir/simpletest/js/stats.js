var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "350000",
        "ok": "350000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31123",
        "ok": "31123",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "223",
        "ok": "223",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1107",
        "ok": "1107",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles2": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1071",
        "ok": "1071",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4270",
        "ok": "4271",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 325852,
        "percentage": 93
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8031,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16117,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3498.74",
        "ok": "3498.74",
        "ko": "-"
    }
},
contents: {
"req_hello-5d414": {
        type: "REQUEST",
        name: "hello",
path: "hello",
pathFormatted: "req_hello-5d414",
stats: {
    "name": "hello",
    "numberOfRequests": {
        "total": "350000",
        "ok": "350000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31123",
        "ok": "31123",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "223",
        "ok": "223",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1107",
        "ok": "1107",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles2": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1071",
        "ok": "1071",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4270",
        "ok": "4270",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 325852,
        "percentage": 93
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8031,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16117,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3498.74",
        "ok": "3498.74",
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
