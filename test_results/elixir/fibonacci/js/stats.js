var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "747",
        "ko": "253"
    },
    "minResponseTime": {
        "total": "484",
        "ok": "484",
        "ko": "60008"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "59975",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "40075",
        "ok": "33324",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "18823",
        "ok": "17152",
        "ko": "0"
    },
    "percentiles1": {
        "total": "46684",
        "ok": "35390",
        "ko": "60009"
    },
    "percentiles2": {
        "total": "60008",
        "ok": "48516",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60009",
        "ok": "56588",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "59529",
        "ko": "60010"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 731,
        "percentage": 73
    },
    "group4": {
        "name": "failed",
        "count": 253,
        "percentage": 25
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.264",
        "ok": "4.679",
        "ko": "1.585"
    }
},
contents: {
"req_fibonacci-ef15d": {
        type: "REQUEST",
        name: "fibonacci",
path: "fibonacci",
pathFormatted: "req_fibonacci-ef15d",
stats: {
    "name": "fibonacci",
    "numberOfRequests": {
        "total": "1000",
        "ok": "747",
        "ko": "253"
    },
    "minResponseTime": {
        "total": "484",
        "ok": "484",
        "ko": "60008"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "59975",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "40075",
        "ok": "33324",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "18823",
        "ok": "17152",
        "ko": "0"
    },
    "percentiles1": {
        "total": "46684",
        "ok": "35390",
        "ko": "60009"
    },
    "percentiles2": {
        "total": "60008",
        "ok": "48516",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60008",
        "ok": "56588",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "59529",
        "ko": "60010"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 731,
        "percentage": 73
    },
    "group4": {
        "name": "failed",
        "count": 253,
        "percentage": 25
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.264",
        "ok": "4.679",
        "ko": "1.585"
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
