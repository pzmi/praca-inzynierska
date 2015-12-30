var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "350000",
        "ok": "335176",
        "ko": "14824"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "75062",
        "ok": "70845",
        "ko": "75062"
    },
    "meanResponseTime": {
        "total": "5847",
        "ok": "4462",
        "ko": "37180"
    },
    "standardDeviation": {
        "total": "10805",
        "ok": "6237",
        "ko": "29181"
    },
    "percentiles1": {
        "total": "2037",
        "ok": "1931",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "4832",
        "ok": "4012",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "31240",
        "ok": "15421",
        "ko": "60041"
    },
    "percentiles4": {
        "total": "60012",
        "ok": "31353",
        "ko": "60613"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 22805,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23532,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 288839,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 14824,
        "percentage": 4
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1741.328",
        "ok": "1667.575",
        "ko": "73.753"
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
        "ok": "335176",
        "ko": "14824"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "75062",
        "ok": "70845",
        "ko": "75062"
    },
    "meanResponseTime": {
        "total": "5847",
        "ok": "4462",
        "ko": "37180"
    },
    "standardDeviation": {
        "total": "10805",
        "ok": "6237",
        "ko": "29181"
    },
    "percentiles1": {
        "total": "2039",
        "ok": "1932",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "4826",
        "ok": "4011",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "31244",
        "ok": "15422",
        "ko": "60041"
    },
    "percentiles4": {
        "total": "60012",
        "ok": "31353",
        "ko": "60613"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 22805,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23532,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 288839,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 14824,
        "percentage": 4
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1741.328",
        "ok": "1667.575",
        "ko": "73.753"
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
