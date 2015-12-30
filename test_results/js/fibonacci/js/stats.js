var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "38",
        "ko": "962"
    },
    "minResponseTime": {
        "total": "1787",
        "ok": "1787",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "91115",
        "ok": "58662",
        "ko": "91115"
    },
    "meanResponseTime": {
        "total": "62260",
        "ok": "30188",
        "ko": "63527"
    },
    "standardDeviation": {
        "total": "10900",
        "ok": "16884",
        "ko": "8367"
    },
    "percentiles1": {
        "total": "60005",
        "ok": "30198",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60006",
        "ok": "44441",
        "ko": "60006"
    },
    "percentiles3": {
        "total": "91075",
        "ok": "55782",
        "ko": "91075"
    },
    "percentiles4": {
        "total": "91104",
        "ok": "58082",
        "ko": "91104"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 38,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 962,
        "percentage": 96
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.249",
        "ok": "0.199",
        "ko": "5.05"
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
        "ok": "38",
        "ko": "962"
    },
    "minResponseTime": {
        "total": "1787",
        "ok": "1787",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "91115",
        "ok": "58662",
        "ko": "91115"
    },
    "meanResponseTime": {
        "total": "62260",
        "ok": "30188",
        "ko": "63527"
    },
    "standardDeviation": {
        "total": "10900",
        "ok": "16884",
        "ko": "8367"
    },
    "percentiles1": {
        "total": "60005",
        "ok": "30198",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "60006",
        "ok": "44441",
        "ko": "60006"
    },
    "percentiles3": {
        "total": "91075",
        "ok": "55782",
        "ko": "91075"
    },
    "percentiles4": {
        "total": "91104",
        "ok": "58082",
        "ko": "91104"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 38,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 962,
        "percentage": 96
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.249",
        "ok": "0.199",
        "ko": "5.05"
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
