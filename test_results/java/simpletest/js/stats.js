var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "350000",
        "ok": "342147",
        "ko": "7853"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "91412",
        "ok": "86686",
        "ko": "91412"
    },
    "meanResponseTime": {
        "total": "4155",
        "ok": "2894",
        "ko": "59091"
    },
    "standardDeviation": {
        "total": "11121",
        "ok": "7160",
        "ko": "13856"
    },
    "percentiles1": {
        "total": "635",
        "ok": "329",
        "ko": "60032"
    },
    "percentiles2": {
        "total": "3026",
        "ok": "3017",
        "ko": "61503"
    },
    "percentiles3": {
        "total": "24270",
        "ok": "15071",
        "ko": "67298"
    },
    "percentiles4": {
        "total": "61039",
        "ok": "32740",
        "ko": "91059"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 174774,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 50298,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 117075,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 7853,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2361.052",
        "ok": "2308.077",
        "ko": "52.975"
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
        "ok": "342147",
        "ko": "7853"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "91412",
        "ok": "86686",
        "ko": "91412"
    },
    "meanResponseTime": {
        "total": "4155",
        "ok": "2894",
        "ko": "59091"
    },
    "standardDeviation": {
        "total": "11121",
        "ok": "7160",
        "ko": "13856"
    },
    "percentiles1": {
        "total": "602",
        "ok": "337",
        "ko": "60032"
    },
    "percentiles2": {
        "total": "3026",
        "ok": "3019",
        "ko": "61503"
    },
    "percentiles3": {
        "total": "25211",
        "ok": "15071",
        "ko": "67298"
    },
    "percentiles4": {
        "total": "61040",
        "ok": "32740",
        "ko": "91059"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 174774,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 50298,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 117075,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 7853,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2361.052",
        "ok": "2308.077",
        "ko": "52.975"
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
