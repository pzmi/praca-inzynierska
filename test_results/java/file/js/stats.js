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
        "total": "1067",
        "ok": "1067",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4233",
        "ok": "4233",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2606",
        "ok": "2606",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "759",
        "ok": "759",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2611",
        "ok": "2611",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3252",
        "ok": "3252",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3782",
        "ok": "3782",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3882",
        "ok": "3882",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 22,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11978,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "115.657",
        "ok": "115.657",
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
        "total": "1067",
        "ok": "1067",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4233",
        "ok": "4233",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2606",
        "ok": "2606",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "759",
        "ok": "759",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2611",
        "ok": "2611",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3252",
        "ok": "3252",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3782",
        "ok": "3782",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3882",
        "ok": "3882",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 22,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11978,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "115.657",
        "ok": "115.657",
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
