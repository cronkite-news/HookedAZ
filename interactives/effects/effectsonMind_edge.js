/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'openingSeq',
                type: 'group',
                rect: ['-9', '-30','1403','673','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['0px', '19px','925px','654px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'lighter',
                    type: 'image',
                    rect: ['339px', '395px','321px','311px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Mind-01.png",'0px','0px'],
                    transform: [[],[],[],['0.73','0.73']]
                },
                {
                    id: 'flame',
                    type: 'image',
                    rect: ['447px', '319px','179px','215px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Mind-02.png",'0px','0px'],
                    transform: [[],[],[],['0.73','0.73']]
                },
                {
                    id: 'spoon',
                    type: 'image',
                    rect: ['929px', '-216px','462px','598px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"spoon-01.png",'0px','0px']
                },
                {
                    id: 'bubbleOne',
                    type: 'ellipse',
                    rect: ['519px', '289px','10px','4px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,0.00)"],
                    stroke: [1,"rgba(255,255,255,1.00)","solid"],
                    transform: [[],[],[],['1','1.41']]
                },
                {
                    id: 'bubbleFour',
                    type: 'ellipse',
                    rect: ['499px', '292px','10px','4px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,0.00)"],
                    stroke: [1,"rgba(255,255,255,1.00)","solid"],
                    transform: [[],[],[],['0.61','0.8601']]
                },
                {
                    id: 'bubbleFive',
                    type: 'ellipse',
                    rect: ['539px', '295px','11px','1px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,0.00)"],
                    stroke: [1,"rgba(255,255,255,1.00)","solid"],
                    transform: [[],[],[],['0.61','0.8601']]
                },
                {
                    id: 'bubbleThree',
                    type: 'ellipse',
                    rect: ['530px', '301px','25px','2px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,0.00)"],
                    stroke: [1,"rgba(255,255,255,1.00)","solid"],
                    transform: [[],[],[],['0.5','0.705']]
                },
                {
                    id: 'bubbleTwo',
                    type: 'ellipse',
                    rect: ['495px', '285px','25px','4px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,0.00)"],
                    stroke: [1,"rgba(255,255,255,1.00)","solid"],
                    transform: [[],[],[],['0.51','0.7191']]
                },
                {
                    id: 'bubbleSix',
                    type: 'ellipse',
                    rect: ['496px', '298px','10px','4px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,0.00)"],
                    stroke: [1,"rgba(255,255,255,1.00)","solid"],
                    transform: [[],[],[],['0.61','0.8601']]
                },
                {
                    id: 'bubbleSeven',
                    type: 'ellipse',
                    rect: ['562px', '296px','10px','4px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,0,0,0.00)"],
                    stroke: [1,"rgba(255,255,255,1.00)","solid"],
                    transform: [[],[],[],['0.61','0.8601']]
                },
                {
                    id: 'fill-042',
                    type: 'image',
                    rect: ['502px', '239px','95px','183px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"fill-042.png",'0px','0px'],
                    transform: [[],[],[],['1.05','1.02027']]
                },
                {
                    id: 'fill2',
                    type: 'ellipse',
                    rect: ['508px', '276px','95px','27px','auto', 'auto'],
                    clip: ['rect(0px -8px -5px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [1,"rgb(255, 255, 255)","solid"]
                },
                {
                    id: 'needle-02',
                    type: 'image',
                    rect: ['600px', '-172px','462px','402px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"needle2.png",'0px','0px']
                },
                {
                    id: 'bodyNew',
                    type: 'image',
                    rect: ['-1707px', '-296px','845px','1462px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bodyNew.png",'0px','0px']
                },
                {
                    id: 'brain',
                    type: 'image',
                    rect: ['173px', '112px','116px','112px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"brain.png",'0px','0px']
                }]
            },
            {
                id: 'bodySeq',
                type: 'group',
                rect: ['-1708px', '-440px','2968','2969','auto', 'auto'],
                c: [
                {
                    id: 'veinUp2',
                    type: 'image',
                    rect: ['1930px', '557px','63px','254px','auto', 'auto'],
                    clip: ['rect(0px 63px 254px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"veinUp.png",'0px','0px']
                },
                {
                    id: 'veinLeft2',
                    type: 'image',
                    rect: ['1934px', '807px','465px','52px','auto', 'auto'],
                    clip: ['rect(0px 479px 52px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"veinLeft.png",'0px','0px']
                },
                {
                    id: 'puncture',
                    type: 'image',
                    rect: ['1449px', '563px','12px','10px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"puncture.png",'0px','0px'],
                    transform: [[],[],[],['0.8','0.8']]
                },
                {
                    id: 'title',
                    type: 'text',
                    rect: ['1766px', '503px','428px','308px','auto', 'auto'],
                    text: "Effects of heroin<br>on the body and mind",
                    font: ['Arial, Helvetica, sans-serif', 61, "rgba(255,255,255,1.00)", "normal", "none", ""]
                },
                {
                    id: 'textOne',
                    type: 'text',
                    rect: ['2212px', '482px','370px','254px','auto', 'auto'],
                    text: "When a user injects heroin, the bloodstream carries the drug to the brain, where it crosses the blood-brain barrier.",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 34, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'InBrain',
                type: 'group',
                rect: ['0', '0','902','647','auto', 'auto'],
                c: [
                {
                    id: 'opioidRepOne',
                    type: 'image',
                    rect: ['0px', '0px','252px','308px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chemicalSeq/opioidRepOne.png",'0px','0px']
                },
                {
                    id: 'OpioidRecTwo',
                    type: 'group',
                    rect: ['650', '0','252','308','auto', 'auto'],
                    c: [
                    {
                        id: 'opioidRecTwo',
                        type: 'image',
                        rect: ['0px', '0px','252px','308px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"chemicalSeq/opioidRecTwo.png",'0px','0px']
                    },
                    {
                        id: 'Ellipse',
                        type: 'ellipse',
                        rect: ['100px', '241px','60px','65px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(255,255,255,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'Ellipse2',
                        type: 'ellipse',
                        rect: ['1px', '169px','60px','52px','auto', 'auto'],
                        borderRadius: ["50%", "50%", "50%", "50%"],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'opiateReceptor',
                    type: 'image',
                    rect: ['715px', '295px','92px','24px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chemicalSeq/opiateReceptor.png",'0px','0px'],
                    transform: [[],['202'],[],['0.81','0.81']]
                },
                {
                    id: 'gabaRec',
                    type: 'image',
                    rect: ['191px', '194px','111px','29px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chemicalSeq/gabaRec.png",'0px','0px'],
                    transform: [[],['110'],[],['0.79','0.79']]
                },
                {
                    id: 'textTwo',
                    type: 'text',
                    rect: ['54px', '527px','822px','120px','auto', 'auto'],
                    text: "Once in the brain, heroin molecules are turned into morphine molecules that attach to opioid receptors. The morphine molecules are then converted into dopamine, which gives a user their high.",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'heroin',
                    type: 'image',
                    rect: ['460px', '417px','81px','81px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chemicalSeq/heroin.png",'0px','0px'],
                    transform: [[],[],[],['0.8','0.8']]
                },
                {
                    id: 'heroinText',
                    type: 'text',
                    rect: ['329px', '377px','88px','45px','auto', 'auto'],
                    text: "Heroin",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'morphine',
                    type: 'image',
                    rect: ['511px', '402px','110px','57px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chemicalSeq/morphine.png",'0px','0px'],
                    transform: [[],[],[],['0.69','0.69']]
                },
                {
                    id: 'morphineText',
                    type: 'text',
                    rect: ['329px', '377px','88px','45px','auto', 'auto'],
                    text: "Morphine",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'GABA',
                    type: 'image',
                    rect: ['713px', '150px','39px','39px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chemicalSeq/GABA.png",'0px','0px']
                },
                {
                    id: 'gabaText',
                    type: 'text',
                    rect: ['534px', '196px','300px','45px','auto', 'auto'],
                    text: "gamma-Aminobutyric acid<br>",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 23, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'dopamine',
                    type: 'image',
                    rect: ['72px', '208px','45px','39px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chemicalSeq/dopamine.png",'0px','0px']
                },
                {
                    id: 'dopamineText',
                    type: 'text',
                    rect: ['164px', '317px','88px','45px','auto', 'auto'],
                    text: "Dopamine",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'brainLabel',
                    type: 'text',
                    rect: ['142px', '23px','634px','51px','auto', 'auto'],
                    text: "Nerve Terminal in the Nucleus Accumbens",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 33, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'drugUse',
                type: 'group',
                rect: ['-45', '42','947','1952','auto', 'auto'],
                c: [
                {
                    id: 'bodyNoHead',
                    type: 'image',
                    rect: ['0px', '318px','634px','1634px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bodyNoHead.png",'0px','0px']
                },
                {
                    id: 'headOne',
                    type: 'image',
                    rect: ['178px', '75px','285px','402px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"headOne.png",'0px','0px']
                },
                {
                    id: 'textThree',
                    type: 'text',
                    rect: ['454px', '7px','523px','280px','auto', 'auto'],
                    text: "After the drug is injected into the bloodstream, the user feels the effects and enters a state of extreme euphoria and relaxation.",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'textFour',
                    type: 'text',
                    rect: ['500px', '32px','423px','140px','auto', 'auto'],
                    text: "Moments later, the user becomes caught in a state between consciousness and sleep called \"the nods.\"<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'headTwo',
                    type: 'image',
                    rect: ['151px', '103px','285px','403px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"headTwo.png",'0px','0px']
                },
                {
                    id: 'rightEyelid',
                    type: 'ellipse',
                    rect: ['311px', '260px','43px','10px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [1,"rgb(255, 255, 255)","solid"]
                },
                {
                    id: 'leftEyelid',
                    type: 'ellipse',
                    rect: ['221px', '262px','37px','10px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [1,"rgb(255, 255, 255)","solid"]
                }]
            },
            {
                id: 'bodyOne',
                type: 'image',
                rect: ['124px', '18px','182px','529px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bodyOne.png",'0px','0px']
            },
            {
                id: 'textFive',
                type: 'text',
                rect: ['373px', '33px','505px','257px','auto', 'auto'],
                text: "If a user continues to take the drug over a prolonged period of time, the brain begins building a tolerance to the drug, which causes the user to need more of the drug to obtain the same effects.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Needles',
                display: 'none',
                type: 'group',
                rect: ['375', '249','423','334','auto', 'auto'],
                c: [
                {
                    id: 'neddle',
                    display: 'block',
                    type: 'image',
                    rect: ['3px', '15px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy',
                    display: 'block',
                    type: 'image',
                    rect: ['42px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy2',
                    display: 'block',
                    type: 'image',
                    rect: ['84px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy3',
                    display: 'block',
                    type: 'image',
                    rect: ['128px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy4',
                    display: 'block',
                    type: 'image',
                    rect: ['170px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy5',
                    display: 'block',
                    type: 'image',
                    rect: ['209px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy6',
                    display: 'block',
                    type: 'image',
                    rect: ['249px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy7',
                    display: 'block',
                    type: 'image',
                    rect: ['291px', '15px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy8',
                    display: 'block',
                    type: 'image',
                    rect: ['330px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy9',
                    display: 'block',
                    type: 'image',
                    rect: ['369px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy10',
                    display: 'block',
                    type: 'image',
                    rect: ['405px', '16px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy21',
                    display: 'block',
                    type: 'image',
                    rect: ['3px', '130px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy20',
                    display: 'block',
                    type: 'image',
                    rect: ['42px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy19',
                    display: 'block',
                    type: 'image',
                    rect: ['84px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy18',
                    display: 'block',
                    type: 'image',
                    rect: ['128px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy17',
                    display: 'block',
                    type: 'image',
                    rect: ['170px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy16',
                    display: 'block',
                    type: 'image',
                    rect: ['209px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy15',
                    display: 'block',
                    type: 'image',
                    rect: ['249px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy14',
                    display: 'block',
                    type: 'image',
                    rect: ['291px', '130px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy13',
                    display: 'block',
                    type: 'image',
                    rect: ['330px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy12',
                    display: 'block',
                    type: 'image',
                    rect: ['369px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy11',
                    display: 'block',
                    type: 'image',
                    rect: ['405px', '131px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy32',
                    display: 'block',
                    type: 'image',
                    rect: ['7px', '251px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy31',
                    display: 'block',
                    type: 'image',
                    rect: ['46px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy30',
                    display: 'block',
                    type: 'image',
                    rect: ['88px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy29',
                    display: 'block',
                    type: 'image',
                    rect: ['132px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy28',
                    display: 'block',
                    type: 'image',
                    rect: ['174px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy27',
                    display: 'block',
                    type: 'image',
                    rect: ['213px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy26',
                    display: 'block',
                    type: 'image',
                    rect: ['253px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy25',
                    display: 'block',
                    type: 'image',
                    rect: ['295px', '251px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy24',
                    display: 'block',
                    type: 'image',
                    rect: ['334px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy23',
                    display: 'block',
                    type: 'image',
                    rect: ['373px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                },
                {
                    id: 'neddleCopy22',
                    display: 'block',
                    type: 'image',
                    rect: ['409px', '252px','12px','68px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"neddle.png",'0px','0px'],
                    transform: [[],[],[],['1.43','1.43']]
                }]
            },
            {
                id: 'shortTermEffects',
                type: 'group',
                rect: ['199', '26','797','468','auto', 'auto'],
                c: [
                {
                    id: 'shortTerm',
                    type: 'text',
                    rect: ['83px', '0px','714px','97px','auto', 'auto'],
                    text: "Short -Term Effects of Heroin",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 41, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'mind',
                    type: 'text',
                    rect: ['234px', '72px','89px','46px','auto', 'auto'],
                    text: "Mind",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 40, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'mindMark',
                    type: 'ellipse',
                    rect: ['14px', '7px','24px','19px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'euphoria',
                    type: 'text',
                    rect: ['281px', '126px','219px','52px','auto', 'auto'],
                    text: "- Euphoria",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'Drowsiness',
                    type: 'text',
                    rect: ['281px', '169px','183px','52px','auto', 'auto'],
                    text: "- Drowsiness",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'bodyMark',
                    type: 'ellipse',
                    rect: ['0px', '169px','60px','48px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(255,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'body',
                    type: 'text',
                    rect: ['236px', '234px','89px','46px','auto', 'auto'],
                    text: "Body",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 40, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'dryMouth',
                    type: 'text',
                    rect: ['280px', '289px','181px','52px','auto', 'auto'],
                    text: "- Dry mouth",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'flushingSkin',
                    type: 'text',
                    rect: ['280px', '336px','197px','52px','auto', 'auto'],
                    text: "- Flushing Skin",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'slowedBreathing',
                    type: 'text',
                    rect: ['280px', '379px','262px','52px','auto', 'auto'],
                    text: "- Slowed Breathing",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'weaknessMuscles',
                    type: 'text',
                    rect: ['281px', '425px','349px','52px','auto', 'auto'],
                    text: "- Weakness in Muscles",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'longtermEffects',
                type: 'group',
                rect: ['199', '26','797','509','auto', 'auto'],
                c: [
                {
                    id: 'longTerm',
                    type: 'text',
                    rect: ['83px', '0px','714px','97px','auto', 'auto'],
                    opacity: 1,
                    text: "Long-Term Effects of Heroin",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 41, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'mind2',
                    type: 'text',
                    rect: ['234px', '72px','89px','46px','auto', 'auto'],
                    text: "Mind",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 40, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'mindMark2',
                    type: 'ellipse',
                    rect: ['14px', '7px','24px','19px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    opacity: 1,
                    fill: ["rgba(255,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'Addiction',
                    type: 'text',
                    rect: ['281px', '126px','170px','52px','auto', 'auto'],
                    opacity: 1,
                    text: "- Addiction",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'Tollerance',
                    type: 'text',
                    rect: ['282px', '172px','179px','52px','auto', 'auto'],
                    opacity: 1,
                    text: "- Tolerance",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'Dependence',
                    type: 'text',
                    rect: ['282px', '218px','211px','52px','auto', 'auto'],
                    opacity: 1,
                    text: "- Dependence",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'bodyMark2',
                    type: 'ellipse',
                    rect: ['0px', '169px','60px','48px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    opacity: 1,
                    fill: ["rgba(255,0,0,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'body2',
                    type: 'text',
                    rect: ['234px', '281px','89px','46px','auto', 'auto'],
                    text: "Body",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 40, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'collapsedVeins',
                    type: 'text',
                    rect: ['281px', '336px','265px','52px','auto', 'auto'],
                    opacity: 1,
                    text: "- Collapsed Veins",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'InfectionHeart',
                    type: 'text',
                    rect: ['280px', '379px','267px','52px','auto', 'auto'],
                    opacity: 1,
                    text: "- Infection in Heart",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'pneumonia',
                    type: 'text',
                    rect: ['280px', '424px','234px','52px','auto', 'auto'],
                    opacity: 1,
                    text: "- Pneumonia",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'liverFunction',
                    type: 'text',
                    rect: ['280px', '466px','386px','52px','auto', 'auto'],
                    opacity: 1,
                    text: "- Decreased Liver Function",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'deathdown4',
                type: 'image',
                rect: ['123px', '486px','701px','171px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"deathdown.png",'0px','0px']
            },
            {
                id: 'RIP-012',
                type: 'image',
                rect: ['625px', '643px','218px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"RIP-01.png",'0px','0px']
            },
            {
                id: 'flowers-01',
                type: 'image',
                rect: ['21px', '218px','154px','197px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flowers-01.png",'0px','0px']
            },
            {
                id: 'causesofdeath',
                type: 'text',
                rect: ['39px', '13px','714px','78px','auto', 'auto'],
                text: "Causes of Death from Heroin",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 63, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'heroinOverdose',
                type: 'text',
                rect: ['97px', '98px','312px','46px','auto', 'auto'],
                text: "- Heroin Overdose",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'RespiratoryFailure',
                type: 'text',
                rect: ['156px', '144px','247px','32px','auto', 'auto'],
                text: "- Respiratory Failure",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'heartFailure',
                type: 'text',
                rect: ['156px', '184px','169px','32px','auto', 'auto'],
                text: "- Heart Failure",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'infectiousE',
                type: 'text',
                rect: ['100px', '247px','769px','46px','auto', 'auto'],
                text: "- Infectious Endocarditis (surface infection of the heart)<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'arrhythmia',
                type: 'text',
                rect: ['101px', '318px','184px','37px','auto', 'auto'],
                text: "- Arrhythmia<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'social_causes',
                type: 'text',
                rect: ['100px', '383px','312px','65px','auto', 'auto'],
                text: "-Social Causes",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 30, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'accidents',
                type: 'text',
                rect: ['156px', '426px','146px','32px','auto', 'auto'],
                text: "- Accidents",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'homicide',
                type: 'text',
                rect: ['156px', '462px','146px','32px','auto', 'auto'],
                text: "- Homicide",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Suicide',
                type: 'text',
                rect: ['156px', '498px','146px','32px','auto', 'auto'],
                text: "- Suicide",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_arrhythmia}": [
                ["style", "height", '37px'],
                ["style", "opacity", '0.000000'],
                ["style", "top", '318px'],
                ["style", "width", '184px']
            ],
            "${_bodyNoHead}": [
                ["style", "top", '318px'],
                ["style", "height", '1634px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '634px']
            ],
            "${_neddleCopy12}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '369px'],
                ["style", "width", '12px']
            ],
            "${_bodyNew}": [
                ["style", "top", '-296px'],
                ["style", "height", '2846px'],
                ["style", "opacity", '1'],
                ["style", "left", '-1707px'],
                ["style", "width", '1644px']
            ],
            "${_mind}": [
                ["style", "top", '72px'],
                ["style", "font-size", '40px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '234px'],
                ["style", "width", '89px']
            ],
            "${_neddleCopy3}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '128px'],
                ["style", "width", '12px']
            ],
            "${_gabaRec}": [
                ["style", "top", '194px'],
                ["transform", "scaleY", '0.79'],
                ["transform", "rotateZ", '110deg'],
                ["transform", "scaleX", '0.79'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '191px']
            ],
            "${_title}": [
                ["style", "top", '503px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1766px'],
                ["style", "font-size", '61px']
            ],
            "${_neddleCopy7}": [
                ["style", "top", '15px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '291px'],
                ["style", "width", '12px']
            ],
            "${_neddleCopy32}": [
                ["style", "top", '251px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '7px'],
                ["style", "width", '12px']
            ],
            "${_social_causes}": [
                ["style", "top", '383px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '100px']
            ],
            "${_infectiousE}": [
                ["style", "width", '769px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '100px'],
                ["style", "font-size", '30px']
            ],
            "${_veinLeft2}": [
                ["style", "top", '807px'],
                ["style", "left", '1934px'],
                ["style", "height", '52px'],
                ["style", "opacity", '0.42520960365854'],
                ["style", "clip", [0,479,52,496], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '465px']
            ],
            "${_dryMouth}": [
                ["style", "top", '289px'],
                ["style", "width", '181px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '280px'],
                ["style", "font-size", '30px']
            ],
            "${_neddleCopy5}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '209px'],
                ["style", "width", '12px']
            ],
            "${_GABA}": [
                ["style", "top", '150px'],
                ["style", "height", '39px'],
                ["style", "opacity", '0'],
                ["style", "left", '713px'],
                ["style", "width", '39px']
            ],
            "${_body}": [
                ["style", "top", '234px'],
                ["style", "width", '89px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '236px'],
                ["style", "font-size", '40px']
            ],
            "${_fill-042}": [
                ["style", "top", '239px'],
                ["transform", "scaleY", '1.02027'],
                ["style", "height", '183px'],
                ["transform", "scaleX", '1.05'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '502px'],
                ["style", "width", '95px']
            ],
            "${_neddleCopy15}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '249px'],
                ["style", "width", '12px']
            ],
            "${_neddleCopy18}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '128px'],
                ["style", "width", '12px']
            ],
            "${_heartFailure}": [
                ["style", "top", '184px'],
                ["style", "width", '169px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '156px'],
                ["style", "font-size", '25px']
            ],
            "${_neddleCopy14}": [
                ["style", "top", '130px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '291px'],
                ["style", "width", '12px']
            ],
            "${_Suicide}": [
                ["style", "top", '498px'],
                ["style", "width", '146px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '156px'],
                ["style", "font-size", '25px']
            ],
            "${_deathdown4}": [
                ["style", "top", '486px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '123px']
            ],
            "${_puncture}": [
                ["style", "top", '563px'],
                ["transform", "scaleY", '0.8'],
                ["style", "height", '10px'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '1449px'],
                ["style", "width", '12px']
            ],
            "${_flame}": [
                ["style", "top", '319px'],
                ["transform", "skewY", '0deg'],
                ["transform", "scaleY", '0.73'],
                ["transform", "skewX", '0deg'],
                ["transform", "scaleX", '0.73'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '447px'],
                ["style", "-webkit-transform-origin", [62.53,52.52], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.53,52.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.53,52.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.53,52.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.53,52.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.53,52.52],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_body2}": [
                ["style", "top", '281px'],
                ["style", "font-size", '40px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '234px'],
                ["style", "width", '89px']
            ],
            "${_euphoria}": [
                ["style", "top", '126px'],
                ["style", "font-size", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '281px'],
                ["style", "width", '154px']
            ],
            "${_neddleCopy8}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '330px'],
                ["style", "width", '12px']
            ],
            "${_longTerm}": [
                ["style", "top", '0px'],
                ["style", "height", '52px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '83px'],
                ["style", "font-size", '45px']
            ],
            "${_bubbleFive}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '0.61'],
                ["style", "border-style", 'solid'],
                ["style", "left", '539px'],
                ["style", "width", '11px'],
                ["style", "top", '295px'],
                ["transform", "scaleY", '1.9035'],
                ["style", "height", '1px'],
                ["color", "border-color", 'rgb(255, 255, 255)'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '0.000000']
            ],
            "${_heroin}": [
                ["style", "top", '417px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '328px']
            ],
            "${_opioidRecTwo}": [
                ["style", "top", '0px'],
                ["style", "height", '308px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '252px']
            ],
            "${_Ellipse}": [
                ["style", "top", '241px'],
                ["style", "height", '65px'],
                ["style", "opacity", '1'],
                ["style", "left", '100px'],
                ["style", "width", '60px']
            ],
            "${_bubbleSeven}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '0.61'],
                ["style", "border-style", 'solid'],
                ["style", "left", '562px'],
                ["style", "width", '10px'],
                ["style", "top", '296px'],
                ["transform", "scaleY", '1.9035'],
                ["style", "height", '4px'],
                ["color", "border-color", 'rgb(255, 255, 255)'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '0.000000']
            ],
            "${_spoon}": [
                ["style", "top", '-15px'],
                ["style", "height", '598px'],
                ["style", "opacity", '1'],
                ["style", "left", '937px'],
                ["style", "width", '462px']
            ],
            "${_Drowsiness}": [
                ["style", "top", '169px'],
                ["style", "width", '183px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '281px'],
                ["style", "font-size", '30px']
            ],
            "${_neddleCopy31}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '46px'],
                ["style", "width", '12px']
            ],
            "${_heroinTextCopy}": [
                ["style", "top", '377px'],
                ["style", "height", '45px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '325px'],
                ["style", "width", '88px']
            ],
            "${_neddleCopy}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '42px'],
                ["style", "width", '12px']
            ],
            "${_mind2}": [
                ["style", "top", '72px'],
                ["style", "width", '89px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '234px'],
                ["style", "font-size", '40px']
            ],
            "${_heroinOverdose}": [
                ["style", "top", '98px'],
                ["style", "font-size", '30px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '97px'],
                ["style", "width", '312px']
            ],
            "${_bodyMark2}": [
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["style", "top", '169px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '48px'],
                ["subproperty", "filter.blur", '6px'],
                ["style", "left", '0px'],
                ["style", "width", '60px']
            ],
            "${_homicide}": [
                ["style", "top", '462px'],
                ["style", "font-size", '25px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '156px'],
                ["style", "width", '146px']
            ],
            "${_neddleCopy26}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '253px'],
                ["style", "width", '12px']
            ],
            "${_slowedBreathing}": [
                ["style", "top", '379px'],
                ["style", "width", '262px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '280px'],
                ["style", "font-size", '30px']
            ],
            "${_mindMark2}": [
                ["style", "top", '7px'],
                ["style", "opacity", '0.000000'],
                ["subproperty", "filter.blur", '3px'],
                ["style", "left", '14px'],
                ["color", "background-color", 'rgba(255,0,0,1)']
            ],
            "${_Addiction}": [
                ["style", "top", '126px'],
                ["style", "width", '170px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '281px'],
                ["style", "font-size", '30px']
            ],
            "${_neddleCopy28}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '174px'],
                ["style", "width", '12px']
            ],
            "${_flowers-01}": [
                ["style", "top", '218px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '197px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '21px'],
                ["style", "width", '154px']
            ],
            "${_neddleCopy23}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '373px'],
                ["style", "width", '12px']
            ],
            "${_heroinText}": [
                ["style", "top", '377px'],
                ["style", "height", '45px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '325px'],
                ["style", "width", '88px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '634px'],
                ["style", "width", '903px']
            ],
            "${_mindMark}": [
                ["style", "top", '7px'],
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["subproperty", "filter.blur", '3px'],
                ["style", "left", '14px'],
                ["style", "opacity", '0.000000']
            ],
            "${_neddleCopy27}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '213px'],
                ["style", "width", '12px']
            ],
            "${_neddleCopy24}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '334px'],
                ["style", "width", '12px']
            ],
            "${_textThree}": [
                ["style", "top", '7px'],
                ["style", "font-size", '30px'],
                ["style", "height", '257px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '454px'],
                ["style", "width", '493px']
            ],
            "${_Ellipse2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '1px']
            ],
            "${_bubbleFour}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '0.61'],
                ["style", "border-style", 'solid'],
                ["style", "left", '499px'],
                ["style", "width", '10px'],
                ["style", "top", '292px'],
                ["transform", "scaleY", '1.9035'],
                ["style", "height", '4px'],
                ["color", "border-color", 'rgb(255, 255, 255)'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px']
            ],
            "${_Tollerance}": [
                ["style", "top", '172px'],
                ["style", "font-size", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '282px'],
                ["style", "width", '179px']
            ],
            "${_accidents}": [
                ["style", "top", '426px'],
                ["style", "width", '146px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '156px'],
                ["style", "font-size", '25px']
            ],
            "${_textOne}": [
                ["style", "top", '482px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '2212px'],
                ["style", "font-size", '34px']
            ],
            "${_headTwo}": [
                ["style", "top", '93px'],
                ["style", "height", '403px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '170px'],
                ["style", "width", '285px']
            ],
            "${_bubbleThree}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '0.5'],
                ["style", "border-style", 'solid'],
                ["style", "left", '530px'],
                ["style", "width", '25px'],
                ["style", "top", '301px'],
                ["transform", "scaleY", '1.6356'],
                ["style", "height", '2px'],
                ["color", "border-color", 'rgb(255, 255, 255)'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px']
            ],
            "${_textFour}": [
                ["style", "top", '32px'],
                ["style", "width", '423px'],
                ["style", "height", '140px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '500px'],
                ["style", "font-size", '30px']
            ],
            "${_shortTerm}": [
                ["style", "top", '0px'],
                ["style", "height", '52px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '83px'],
                ["style", "font-size", '45px']
            ],
            "${_Needles}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_opiateReceptor}": [
                ["style", "top", '295px'],
                ["style", "height", '24px'],
                ["transform", "scaleY", '0.81'],
                ["transform", "rotateZ", '202deg'],
                ["transform", "scaleX", '0.81'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '715px'],
                ["style", "width", '92px']
            ],
            "${_neddleCopy22}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '409px'],
                ["style", "width", '12px']
            ],
            "${_neddle}": [
                ["style", "top", '15px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '3px'],
                ["style", "width", '12px']
            ],
            "${_neddleCopy30}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '88px'],
                ["style", "width", '12px']
            ],
            "${_pneumonia}": [
                ["style", "top", '424px'],
                ["style", "font-size", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '280px'],
                ["style", "width", '234px']
            ],
            "${_bodySeq}": [
                ["style", "left", '-1708px'],
                ["style", "top", '-440px']
            ],
            "${_headOne}": [
                ["style", "top", '75px'],
                ["style", "height", '402px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '178px'],
                ["style", "width", '285px']
            ],
            "${_collapsedVeins}": [
                ["style", "top", '336px'],
                ["style", "font-size", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '281px'],
                ["style", "width", '265px']
            ],
            "${_neddleCopy16}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '209px'],
                ["style", "width", '12px']
            ],
            "${_bodyOne}": [
                ["style", "top", '18px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '612px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '124px'],
                ["style", "width", '210px']
            ],
            "${_neddleCopy21}": [
                ["style", "top", '130px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '3px'],
                ["style", "width", '12px']
            ],
            "${_OpioidRecTwo}": [
                ["style", "opacity", '0.000000']
            ],
            "${_causesofdeath}": [
                ["style", "top", '13px'],
                ["style", "width", '838px'],
                ["style", "height", '78px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '39px'],
                ["style", "font-size", '63px']
            ],
            "${_gabaText}": [
                ["style", "top", '201px'],
                ["style", "text-align", 'center'],
                ["style", "width", '300px'],
                ["style", "height", '45px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '534px'],
                ["style", "font-size", '23px']
            ],
            "${_neddleCopy10}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '405px'],
                ["style", "width", '12px']
            ],
            "${_neddleCopy4}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '170px'],
                ["style", "width", '12px']
            ],
            "${_RespiratoryFailure}": [
                ["style", "top", '144px'],
                ["style", "font-size", '25px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '156px'],
                ["style", "width", '247px']
            ],
            "${_dopamine}": [
                ["style", "top", '208px'],
                ["style", "height", '39px'],
                ["style", "opacity", '0'],
                ["style", "left", '72px'],
                ["style", "width", '45px']
            ],
            "${_lighter}": [
                ["style", "top", '395px'],
                ["transform", "scaleY", '0.73'],
                ["transform", "scaleX", '0.73'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '339px']
            ],
            "${_InfectionHeart}": [
                ["style", "top", '379px'],
                ["style", "width", '267px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '280px'],
                ["style", "font-size", '30px']
            ],
            "${_neddleCopy11}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '405px'],
                ["style", "width", '12px']
            ],
            "${_flushingSkin}": [
                ["style", "top", '336px'],
                ["style", "font-size", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '280px'],
                ["style", "width", '227px']
            ],
            "${_leftEyelid}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '252px'],
                ["style", "height", '10px'],
                ["style", "opacity", '0'],
                ["style", "left", '240px'],
                ["style", "width", '37px']
            ],
            "${_veinUp2}": [
                ["style", "top", '557px'],
                ["style", "opacity", '0.42520960365854'],
                ["style", "left", '1930px'],
                ["style", "clip", [305,63,254,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_neddleCopy2}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '84px'],
                ["style", "width", '12px']
            ],
            "${_textTwo}": [
                ["style", "top", '527px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '54px'],
                ["style", "font-size", '27px']
            ],
            "${_textFive}": [
                ["style", "top", '33px'],
                ["style", "height", '217px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '373px'],
                ["style", "width", '505px']
            ],
            "${_morphine}": [
                ["style", "top", '407px'],
                ["transform", "scaleY", '0.69'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.69'],
                ["style", "opacity", '0'],
                ["style", "left", '461px']
            ],
            "${_neddleCopy17}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '170px'],
                ["style", "width", '12px']
            ],
            "${_neddleCopy20}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '42px'],
                ["style", "width", '12px']
            ],
            "${_weaknessMuscles}": [
                ["style", "top", '425px'],
                ["style", "font-size", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '281px'],
                ["style", "width", '349px']
            ],
            "${_brainLabel}": [
                ["style", "top", '23px'],
                ["style", "font-size", '33px'],
                ["style", "height", '51px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '142px'],
                ["style", "width", '634px']
            ],
            "${_needle-02}": [
                ["style", "-webkit-transform-origin", [93.53,69.27], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [93.53,69.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [93.53,69.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [93.53,69.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [93.53,69.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [93.53,69.27],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-172px'],
                ["transform", "rotateZ", '50deg'],
                ["style", "height", '402px'],
                ["style", "opacity", '1'],
                ["style", "left", '600px'],
                ["style", "width", '462px']
            ],
            "${_bubbleSix}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '0.61'],
                ["style", "border-style", 'solid'],
                ["style", "left", '496px'],
                ["style", "width", '10px'],
                ["style", "top", '298px'],
                ["transform", "scaleY", '1.9035'],
                ["style", "height", '4px'],
                ["color", "border-color", 'rgb(255, 255, 255)'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '654px'],
                ["style", "top", '19px'],
                ["style", "left", '0px'],
                ["style", "width", '925px']
            ],
            "${_neddleCopy9}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '369px'],
                ["style", "width", '12px']
            ],
            "${_opioidRepOne}": [
                ["style", "top", '0px'],
                ["style", "height", '308px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '252px']
            ],
            "${_neddleCopy25}": [
                ["style", "top", '251px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '295px'],
                ["style", "width", '12px']
            ],
            "${_fill2}": [
                ["style", "top", '276px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '508px'],
                ["style", "height", '27px'],
                ["style", "opacity", '1'],
                ["style", "clip", [80,100,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '95px']
            ],
            "${_neddleCopy6}": [
                ["style", "top", '16px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '249px'],
                ["style", "width", '12px']
            ],
            "${_bubbleTwo}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleX", '0.51'],
                ["style", "border-style", 'solid'],
                ["style", "left", '495px'],
                ["style", "width", '25px'],
                ["style", "top", '285px'],
                ["transform", "scaleY", '1.5792'],
                ["style", "height", '4px'],
                ["color", "border-color", 'rgb(255, 255, 255)'],
                ["style", "opacity", '0.000000'],
                ["style", "border-width", '1px']
            ],
            "${_rightEyelid}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '250px'],
                ["style", "height", '10px'],
                ["style", "opacity", '0'],
                ["style", "left", '330px'],
                ["style", "width", '43px']
            ],
            "${_RIP-012}": [
                ["style", "left", '625px'],
                ["style", "top", '643px']
            ],
            "${_neddleCopy13}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '330px'],
                ["style", "width", '12px']
            ],
            "${_bubbleOne}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "left", '519px'],
                ["style", "width", '10px'],
                ["style", "top", '289px'],
                ["transform", "scaleY", '1.41'],
                ["style", "height", '4px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '0']
            ],
            "${_Dependence}": [
                ["style", "top", '218px'],
                ["style", "font-size", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '282px'],
                ["style", "width", '211px']
            ],
            "${_bodyMark}": [
                ["color", "background-color", 'rgba(255,0,0,1)'],
                ["style", "top", '169px'],
                ["subproperty", "filter.blur", '6px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '60px']
            ],
            "${_neddleCopy29}": [
                ["style", "top", '252px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '132px'],
                ["style", "width", '12px']
            ],
            "${_dopamineText}": [
                ["style", "top", '317px'],
                ["style", "height", '45px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '164px'],
                ["style", "width", '88px']
            ],
            "${_morphineText}": [
                ["style", "top", '373px'],
                ["style", "height", '45px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '466px'],
                ["style", "width", '88px']
            ],
            "${_brain}": [
                ["style", "top", '112px'],
                ["style", "height", '112px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '176px'],
                ["style", "width", '116px']
            ],
            "${_liverFunction}": [
                ["style", "top", '466px'],
                ["style", "width", '386px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '43px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '280px'],
                ["style", "font-size", '30px']
            ],
            "${_neddleCopy19}": [
                ["style", "top", '131px'],
                ["transform", "scaleX", '1.43'],
                ["transform", "scaleY", '1.43'],
                ["style", "display", 'block'],
                ["style", "height", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '84px'],
                ["style", "width", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 139500,
            autoPlay: true,
            timeline: [
                { id: "eid941", tween: [ "style", "${_neddleCopy29}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid701", tween: [ "style", "${_neddleCopy22}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid766", tween: [ "style", "${_neddleCopy22}", "display", 'block', { fromValue: 'none'}], position: 76500, duration: 0 },
                { id: "eid931", tween: [ "style", "${_neddleCopy10}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1160", tween: [ "style", "${_social_causes}", "opacity", '1', { fromValue: '0.000000'}], position: 133540, duration: 1460 },
                { id: "eid224", tween: [ "style", "${_fill-042}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 250 },
                { id: "eid240", tween: [ "style", "${_fill-042}", "opacity", '0', { fromValue: '1'}], position: 12750, duration: 1250 },
                { id: "eid912", tween: [ "style", "${_neddleCopy26}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid932", tween: [ "style", "${_neddleCopy15}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid585", tween: [ "style", "${_bodyNoHead}", "left", '0px', { fromValue: '0px'}], position: 50500, duration: 0 },
                { id: "eid925", tween: [ "style", "${_neddleCopy7}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid714", tween: [ "style", "${_neddleCopy13}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid753", tween: [ "style", "${_neddleCopy13}", "display", 'block', { fromValue: 'none'}], position: 75839, duration: 0 },
                { id: "eid959", tween: [ "style", "${_mindMark}", "opacity", '1', { fromValue: '0.000000'}], position: 79500, duration: 1000 },
                { id: "eid986", tween: [ "style", "${_mindMark}", "opacity", '0', { fromValue: '1'}], position: 84500, duration: 1000 },
                { id: "eid1091", tween: [ "style", "${_fill2}", "clip", [0,109,44,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [80,100,40,0]}], position: 12500, duration: 250 },
                { id: "eid101", tween: [ "transform", "${_bubbleOne}", "scaleX", '1.41', { fromValue: '1'}], position: 6250, duration: 250 },
                { id: "eid104", tween: [ "transform", "${_bubbleOne}", "scaleX", '1', { fromValue: '1.41'}], position: 6500, duration: 250 },
                { id: "eid110", tween: [ "transform", "${_bubbleOne}", "scaleX", '1.41', { fromValue: '1'}], position: 6750, duration: 250 },
                { id: "eid111", tween: [ "transform", "${_bubbleOne}", "scaleX", '1', { fromValue: '1.41'}], position: 7000, duration: 250 },
                { id: "eid112", tween: [ "transform", "${_bubbleOne}", "scaleX", '1.41', { fromValue: '1'}], position: 7250, duration: 250 },
                { id: "eid113", tween: [ "transform", "${_bubbleOne}", "scaleX", '1', { fromValue: '1.41'}], position: 7500, duration: 250 },
                { id: "eid130", tween: [ "transform", "${_bubbleOne}", "scaleX", '1.41', { fromValue: '1'}], position: 7750, duration: 250 },
                { id: "eid131", tween: [ "transform", "${_bubbleOne}", "scaleX", '1', { fromValue: '1.41'}], position: 8000, duration: 250 },
                { id: "eid162", tween: [ "transform", "${_bubbleOne}", "scaleX", '1', { fromValue: '1.41'}], position: 8250, duration: 250 },
                { id: "eid163", tween: [ "transform", "${_bubbleOne}", "scaleX", '1.41', { fromValue: '1'}], position: 8500, duration: 250 },
                { id: "eid164", tween: [ "transform", "${_bubbleOne}", "scaleX", '1', { fromValue: '1.41'}], position: 8750, duration: 250 },
                { id: "eid175", tween: [ "transform", "${_bubbleOne}", "scaleX", '1', { fromValue: '1.41'}], position: 9000, duration: 250 },
                { id: "eid176", tween: [ "transform", "${_bubbleOne}", "scaleX", '1.41', { fromValue: '1'}], position: 9250, duration: 250 },
                { id: "eid177", tween: [ "transform", "${_bubbleOne}", "scaleX", '1', { fromValue: '1.41'}], position: 9500, duration: 250 },
                { id: "eid481", tween: [ "style", "${_dopamine}", "left", '103px', { fromValue: '72px'}], position: 45200, duration: 700 },
                { id: "eid482", tween: [ "style", "${_dopamine}", "left", '157px', { fromValue: '103px'}], position: 45900, duration: 700 },
                { id: "eid484", tween: [ "style", "${_dopamine}", "left", '312px', { fromValue: '157px'}], position: 46600, duration: 700 },
                { id: "eid486", tween: [ "style", "${_dopamine}", "left", '417px', { fromValue: '312px'}], position: 47300, duration: 700 },
                { id: "eid381", tween: [ "style", "${_brain}", "opacity", '1', { fromValue: '0.000000'}], position: 22000, duration: 2000 },
                { id: "eid422", tween: [ "style", "${_brain}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 6000 },
                { id: "eid521", tween: [ "style", "${_gabaText}", "opacity", '1', { fromValue: '0.000000'}], position: 41429, duration: 643 },
                { id: "eid528", tween: [ "style", "${_gabaText}", "opacity", '0', { fromValue: '1'}], position: 42071, duration: 1286 },
                { id: "eid446", tween: [ "style", "${_morphine}", "left", '509px', { fromValue: '461px'}], position: 34000, duration: 667 },
                { id: "eid533", tween: [ "style", "${_morphine}", "left", '527px', { fromValue: '509px'}], position: 34667, duration: 212 },
                { id: "eid534", tween: [ "style", "${_morphine}", "left", '559px', { fromValue: '527px'}], position: 34879, duration: 439 },
                { id: "eid535", tween: [ "style", "${_morphine}", "left", '610px', { fromValue: '559px'}], position: 35318, duration: 1126 },
                { id: "eid451", tween: [ "style", "${_morphine}", "left", '702px', { fromValue: '610px'}], position: 36444, duration: 2444 },
                { id: "eid454", tween: [ "style", "${_morphine}", "left", '731px', { fromValue: '702px'}], position: 38889, duration: 611 },
                { id: "eid74", tween: [ "style", "${_spoon}", "left", '445px', { fromValue: '937px'}], position: 4000, duration: 1000 },
                { id: "eid720", tween: [ "style", "${_neddleCopy19}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid747", tween: [ "style", "${_neddleCopy19}", "display", 'block', { fromValue: 'none'}], position: 75546, duration: 0 },
                { id: "eid584", tween: [ "style", "${_headOne}", "left", '178px', { fromValue: '178px'}], position: 50500, duration: 0 },
                { id: "eid590", tween: [ "style", "${_textThree}", "opacity", '1', { fromValue: '0.000000'}], position: 50500, duration: 1000 },
                { id: "eid602", tween: [ "style", "${_textThree}", "opacity", '0', { fromValue: '1'}], position: 57000, duration: 1000 },
                { id: "eid580", tween: [ "style", "${_bodyNoHead}", "opacity", '1', { fromValue: '0.000000'}], position: 49500, duration: 1000 },
                { id: "eid682", tween: [ "style", "${_bodyNoHead}", "opacity", '0', { fromValue: '1'}], position: 67000, duration: 1000 },
                { id: "eid722", tween: [ "style", "${_neddleCopy21}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid745", tween: [ "style", "${_neddleCopy21}", "display", 'block', { fromValue: 'none'}], position: 75463, duration: 0 },
                { id: "eid713", tween: [ "style", "${_neddleCopy12}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid754", tween: [ "style", "${_neddleCopy12}", "display", 'block', { fromValue: 'none'}], position: 75889, duration: 0 },
                { id: "eid556", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid1051", tween: [ "style", "${_Dependence}", "opacity", '1', { fromValue: '0.000000'}], position: 101000, duration: 1500 },
                { id: "eid1117", tween: [ "style", "${_Dependence}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid704", tween: [ "style", "${_neddleCopy25}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid763", tween: [ "style", "${_neddleCopy25}", "display", 'block', { fromValue: 'none'}], position: 76346, duration: 0 },
                { id: "eid930", tween: [ "style", "${_neddleCopy22}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid915", tween: [ "style", "${_neddleCopy12}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid928", tween: [ "style", "${_neddleCopy19}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1079", tween: [ "style", "${_pneumonia}", "opacity", '1', { fromValue: '0.000000'}], position: 107500, duration: 1500 },
                { id: "eid1112", tween: [ "style", "${_pneumonia}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid914", tween: [ "style", "${_neddleCopy21}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1033", tween: [ "style", "${_mindMark2}", "opacity", '1', { fromValue: '0.000000'}], position: 97000, duration: 1000 },
                { id: "eid1053", tween: [ "style", "${_mindMark2}", "opacity", '0', { fromValue: '1'}], position: 103000, duration: 1500 },
                { id: "eid457", tween: [ "style", "${_GABA}", "top", '199px', { fromValue: '150px'}], position: 40143, duration: 643 },
                { id: "eid458", tween: [ "style", "${_GABA}", "top", '266px', { fromValue: '199px'}], position: 40786, duration: 643 },
                { id: "eid473", tween: [ "style", "${_GABA}", "top", '251px', { fromValue: '266px'}], position: 41429, duration: 643 },
                { id: "eid475", tween: [ "style", "${_GABA}", "top", '229px', { fromValue: '251px'}], position: 42071, duration: 643 },
                { id: "eid477", tween: [ "style", "${_GABA}", "top", '204px', { fromValue: '229px'}], position: 42714, duration: 643 },
                { id: "eid479", tween: [ "style", "${_GABA}", "top", '176px', { fromValue: '204px'}], position: 43357, duration: 643 },
                { id: "eid911", tween: [ "style", "${_neddleCopy32}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1134", tween: [ "style", "${_flowers-01}", "opacity", '1', { fromValue: '0.000000'}], position: 122750, duration: 1750 },
                { id: "eid6", tween: [ "style", "${_lighter}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 1250 },
                { id: "eid236", tween: [ "style", "${_lighter}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid1151", tween: [ "style", "${_heartFailure}", "opacity", '1', { fromValue: '0.000000'}], position: 129000, duration: 1500 },
                { id: "eid1131", tween: [ "style", "${_RIP-012}", "top", '297px', { fromValue: '643px'}], position: 121000, duration: 1500 },
                { id: "eid399", tween: [ "style", "${_brain}", "top", '-42px', { fromValue: '112px'}], position: 24000, duration: 1000 },
                { id: "eid404", tween: [ "style", "${_brain}", "top", '-279px', { fromValue: '-42px'}], position: 25000, duration: 1000 },
                { id: "eid409", tween: [ "style", "${_brain}", "top", '-730px', { fromValue: '-279px'}], position: 26000, duration: 1000 },
                { id: "eid413", tween: [ "style", "${_brain}", "top", '-1216px', { fromValue: '-730px'}], position: 27000, duration: 1000 },
                { id: "eid415", tween: [ "style", "${_brain}", "top", '-1679px', { fromValue: '-1216px'}], position: 28000, duration: 1000 },
                { id: "eid419", tween: [ "style", "${_brain}", "top", '-2381px', { fromValue: '-1679px'}], position: 29000, duration: 1000 },
                { id: "eid635", tween: [ "style", "${_brain}", "top", '-2364px', { fromValue: '-2381px'}], position: 65250, duration: 0 },
                { id: "eid702", tween: [ "style", "${_neddleCopy23}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid765", tween: [ "style", "${_neddleCopy23}", "display", 'block', { fromValue: 'none'}], position: 76438, duration: 0 },
                { id: "eid434", tween: [ "style", "${_opiateReceptor}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid560", tween: [ "style", "${_opiateReceptor}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid923", tween: [ "style", "${_neddleCopy6}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1073", tween: [ "style", "${_collapsedVeins}", "opacity", '1', { fromValue: '0.000000'}], position: 104500, duration: 1500 },
                { id: "eid1109", tween: [ "style", "${_collapsedVeins}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid998", tween: [ "style", "${_slowedBreathing}", "opacity", '1', { fromValue: '0.000000'}], position: 89500, duration: 1500 },
                { id: "eid1014", tween: [ "style", "${_slowedBreathing}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid447", tween: [ "style", "${_morphine}", "top", '394px', { fromValue: '407px'}], position: 34000, duration: 2444 },
                { id: "eid452", tween: [ "style", "${_morphine}", "top", '286px', { fromValue: '394px'}], position: 36444, duration: 2444 },
                { id: "eid455", tween: [ "style", "${_morphine}", "top", '221px', { fromValue: '286px'}], position: 38889, duration: 611 },
                { id: "eid721", tween: [ "style", "${_neddleCopy20}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid746", tween: [ "style", "${_neddleCopy20}", "display", 'block', { fromValue: 'none'}], position: 75500, duration: 0 },
                { id: "eid910", tween: [ "style", "${_neddleCopy3}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid195", tween: [ "transform", "${_bubbleSeven}", "scaleX", '1.35', { fromValue: '0.61'}], position: 8552, duration: 17 },
                { id: "eid196", tween: [ "transform", "${_bubbleSeven}", "scaleX", '0.21', { fromValue: '1.35'}], position: 8569, duration: 483 },
                { id: "eid366", tween: [ "style", "${_puncture}", "left", '1559px', { fromValue: '1449px'}], position: 16000, duration: 1000 },
                { id: "eid703", tween: [ "style", "${_neddleCopy24}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid764", tween: [ "style", "${_neddleCopy24}", "display", 'block', { fromValue: 'none'}], position: 76395, duration: 0 },
                { id: "eid1082", tween: [ "style", "${_liverFunction}", "opacity", '1', { fromValue: '0.000000'}], position: 109000, duration: 1500 },
                { id: "eid1113", tween: [ "style", "${_liverFunction}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid179", tween: [ "style", "${_bubbleFour}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 250 },
                { id: "eid208", tween: [ "style", "${_bubbleFour}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid723", tween: [ "style", "${_neddleCopy10}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid744", tween: [ "style", "${_neddleCopy10}", "display", 'block', { fromValue: 'none'}], position: 75426, duration: 0 },
                { id: "eid5", tween: [ "style", "${_flame}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 1250 },
                { id: "eid200", tween: [ "style", "${_flame}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid1036", tween: [ "subproperty", "${_mindMark2}", "filter.blur", '9px', { fromValue: '3px'}], position: 97000, duration: 1000 },
                { id: "eid1038", tween: [ "subproperty", "${_mindMark2}", "filter.blur", '3px', { fromValue: '9px'}], position: 98000, duration: 1000 },
                { id: "eid1039", tween: [ "subproperty", "${_mindMark2}", "filter.blur", '9px', { fromValue: '3px'}], position: 99000, duration: 1000 },
                { id: "eid1040", tween: [ "subproperty", "${_mindMark2}", "filter.blur", '3px', { fromValue: '9px'}], position: 100000, duration: 1000 },
                { id: "eid1041", tween: [ "subproperty", "${_mindMark2}", "filter.blur", '9px', { fromValue: '3px'}], position: 101000, duration: 1000 },
                { id: "eid1042", tween: [ "subproperty", "${_mindMark2}", "filter.blur", '3px', { fromValue: '9px'}], position: 102000, duration: 1000 },
                { id: "eid245", tween: [ "transform", "${_flame}", "skewX", '-10deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
                { id: "eid265", tween: [ "transform", "${_flame}", "skewX", '0deg', { fromValue: '-10deg'}], position: 3000, duration: 1000 },
                { id: "eid268", tween: [ "transform", "${_flame}", "skewX", '-10deg', { fromValue: '0deg'}], position: 4000, duration: 1000 },
                { id: "eid269", tween: [ "transform", "${_flame}", "skewX", '0deg', { fromValue: '-10deg'}], position: 5000, duration: 1000 },
                { id: "eid272", tween: [ "transform", "${_flame}", "skewX", '-10deg', { fromValue: '0deg'}], position: 6000, duration: 1000 },
                { id: "eid273", tween: [ "transform", "${_flame}", "skewX", '0deg', { fromValue: '-10deg'}], position: 7000, duration: 1000 },
                { id: "eid276", tween: [ "transform", "${_flame}", "skewX", '-10deg', { fromValue: '0deg'}], position: 8000, duration: 1000 },
                { id: "eid277", tween: [ "transform", "${_flame}", "skewX", '0deg', { fromValue: '-10deg'}], position: 9000, duration: 1000 },
                { id: "eid360", tween: [ "style", "${_textOne}", "opacity", '1', { fromValue: '0.000000'}], position: 16000, duration: 1000 },
                { id: "eid363", tween: [ "style", "${_textOne}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 1000 },
                { id: "eid1001", tween: [ "style", "${_weaknessMuscles}", "opacity", '1', { fromValue: '0.000000'}], position: 91000, duration: 1500 },
                { id: "eid1022", tween: [ "style", "${_weaknessMuscles}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid1070", tween: [ "style", "${_body2}", "opacity", '1', { fromValue: '0.000000'}], position: 103500, duration: 1000 },
                { id: "eid1114", tween: [ "style", "${_body2}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid1169", tween: [ "style", "${_Suicide}", "opacity", '1', { fromValue: '0.000000'}], position: 138000, duration: 1500 },
                { id: "eid352", tween: [ "style", "${_veinUp2}", "clip", [-72,63,254,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [305,63,254,0]}], position: 19000, duration: 2000 },
                { id: "eid919", tween: [ "style", "${_neddle}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid181", tween: [ "transform", "${_bubbleFour}", "scaleX", '1.35', { fromValue: '0.61'}], position: 6250, duration: 250 },
                { id: "eid183", tween: [ "transform", "${_bubbleFour}", "scaleX", '0.21', { fromValue: '1.35'}], position: 6500, duration: 250 },
                { id: "eid995", tween: [ "style", "${_flushingSkin}", "opacity", '1', { fromValue: '0.000000'}], position: 88000, duration: 1500 },
                { id: "eid1016", tween: [ "style", "${_flushingSkin}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid944", tween: [ "style", "${_shortTerm}", "opacity", '1', { fromValue: '0.000000'}], position: 78500, duration: 1000 },
                { id: "eid1021", tween: [ "style", "${_shortTerm}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid445", tween: [ "style", "${_heroin}", "opacity", '1', { fromValue: '0'}], position: 32000, duration: 1665 },
                { id: "eid450", tween: [ "style", "${_heroin}", "opacity", '0', { fromValue: '1'}], position: 33665, duration: 2085 },
                { id: "eid531", tween: [ "style", "${_dopamineText}", "left", '224px', { fromValue: '164px'}], position: 46830, duration: 265 },
                { id: "eid543", tween: [ "style", "${_dopamineText}", "left", '270px', { fromValue: '224px'}], position: 47095, duration: 205 },
                { id: "eid544", tween: [ "style", "${_dopamineText}", "left", '371px', { fromValue: '270px'}], position: 47300, duration: 700 },
                { id: "eid549", tween: [ "style", "${_dopamineText}", "left", '370px', { fromValue: '371px'}], position: 48000, duration: 86 },
                { id: "eid343", tween: [ "style", "${_bodyNew}", "height", '1566px', { fromValue: '2846px'}], position: 16000, duration: 1000 },
                { id: "eid951", tween: [ "style", "${_mind}", "opacity", '1', { fromValue: '0.000000'}], position: 79500, duration: 1000 },
                { id: "eid1018", tween: [ "style", "${_mind}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid294", tween: [ "style", "${_puncture}", "height", '14px', { fromValue: '10px'}], position: 15387, duration: 113 },
                { id: "eid368", tween: [ "style", "${_puncture}", "height", '10px', { fromValue: '14px'}], position: 16000, duration: 1000 },
                { id: "eid345", tween: [ "style", "${_bodyNew}", "width", '905px', { fromValue: '1644px'}], position: 16000, duration: 1000 },
                { id: "eid480", tween: [ "style", "${_dopamine}", "top", '263px', { fromValue: '208px'}], position: 45200, duration: 700 },
                { id: "eid483", tween: [ "style", "${_dopamine}", "top", '330px', { fromValue: '263px'}], position: 45900, duration: 700 },
                { id: "eid485", tween: [ "style", "${_dopamine}", "top", '411px', { fromValue: '330px'}], position: 46600, duration: 700 },
                { id: "eid487", tween: [ "style", "${_dopamine}", "top", '453px', { fromValue: '411px'}], position: 47300, duration: 700 },
                { id: "eid705", tween: [ "style", "${_neddleCopy26}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid762", tween: [ "style", "${_neddleCopy26}", "display", 'block', { fromValue: 'none'}], position: 76300, duration: 0 },
                { id: "eid954", tween: [ "subproperty", "${_mindMark}", "filter.blur", '9px', { fromValue: '3px'}], position: 79500, duration: 1000 },
                { id: "eid956", tween: [ "subproperty", "${_mindMark}", "filter.blur", '3px', { fromValue: '9px'}], position: 80500, duration: 1000 },
                { id: "eid966", tween: [ "subproperty", "${_mindMark}", "filter.blur", '9px', { fromValue: '3px'}], position: 81500, duration: 1000 },
                { id: "eid967", tween: [ "subproperty", "${_mindMark}", "filter.blur", '3px', { fromValue: '9px'}], position: 82500, duration: 1000 },
                { id: "eid968", tween: [ "subproperty", "${_mindMark}", "filter.blur", '9px', { fromValue: '3px'}], position: 83500, duration: 1000 },
                { id: "eid453", tween: [ "transform", "${_morphine}", "rotateZ", '19deg', { fromValue: '0deg'}], position: 36444, duration: 2444 },
                { id: "eid314", tween: [ "style", "${_needle-02}", "opacity", '0', { fromValue: '1'}], position: 15500, duration: 500 },
                { id: "eid449", tween: [ "style", "${_morphine}", "opacity", '1', { fromValue: '0'}], position: 34000, duration: 2139 },
                { id: "eid561", tween: [ "style", "${_morphine}", "opacity", '0', { fromValue: '1'}], position: 48172, duration: 914 },
                { id: "eid197", tween: [ "style", "${_bubbleSeven}", "opacity", '1', { fromValue: '0.000000'}], position: 8302, duration: 250 },
                { id: "eid211", tween: [ "style", "${_bubbleSeven}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid493", tween: [ "style", "${_dopamine}", "opacity", '1', { fromValue: '0'}], position: 44500, duration: 700 },
                { id: "eid562", tween: [ "style", "${_dopamine}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid198", tween: [ "transform", "${_bubbleSeven}", "scaleY", '0.29609', { fromValue: '1.9035'}], position: 8802, duration: 250 },
                { id: "eid184", tween: [ "transform", "${_bubbleFour}", "scaleY", '0.29609', { fromValue: '1.9035'}], position: 6500, duration: 250 },
                { id: "eid187", tween: [ "style", "${_bubbleFive}", "opacity", '1', { fromValue: '0.000000'}], position: 6802, duration: 250 },
                { id: "eid213", tween: [ "style", "${_bubbleFive}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid638", tween: [ "style", "${_rightEyelid}", "top", '290px', { fromValue: '250px'}], position: 60000, duration: 1500 },
                { id: "eid642", tween: [ "style", "${_rightEyelid}", "top", '259px', { fromValue: '290px'}], position: 61500, duration: 250 },
                { id: "eid651", tween: [ "style", "${_rightEyelid}", "top", '285px', { fromValue: '260px'}], position: 61750, duration: 1500 },
                { id: "eid652", tween: [ "style", "${_rightEyelid}", "top", '259px', { fromValue: '285px'}], position: 63250, duration: 250 },
                { id: "eid659", tween: [ "style", "${_rightEyelid}", "top", '284px', { fromValue: '260px'}], position: 63500, duration: 1500 },
                { id: "eid660", tween: [ "style", "${_rightEyelid}", "top", '249px', { fromValue: '284px'}], position: 65000, duration: 250 },
                { id: "eid707", tween: [ "style", "${_neddleCopy28}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid760", tween: [ "style", "${_neddleCopy28}", "display", 'block', { fromValue: 'none'}], position: 76180, duration: 0 },
                { id: "eid219", tween: [ "transform", "${_needle-02}", "rotateZ", '-36deg', { fromValue: '50deg'}], position: 10000, duration: 1000 },
                { id: "eid292", tween: [ "transform", "${_needle-02}", "rotateZ", '-46deg', { fromValue: '-36deg'}], position: 14500, duration: 1000 },
                { id: "eid917", tween: [ "style", "${_neddleCopy11}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid115", tween: [ "style", "${_bubbleTwo}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 250 },
                { id: "eid210", tween: [ "style", "${_bubbleTwo}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid233", tween: [ "style", "${_fill-042}", "left", '295px', { fromValue: '502px'}], position: 11250, duration: 1250 },
                { id: "eid716", tween: [ "style", "${_neddleCopy15}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid751", tween: [ "style", "${_neddleCopy15}", "display", 'block', { fromValue: 'none'}], position: 75750, duration: 0 },
                { id: "eid564", tween: [ "style", "${_opioidRecTwo}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid107", tween: [ "style", "${_bubbleOne}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 250 },
                { id: "eid212", tween: [ "style", "${_bubbleOne}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid456", tween: [ "style", "${_GABA}", "left", '608px', { fromValue: '713px'}], position: 40143, duration: 643 },
                { id: "eid459", tween: [ "style", "${_GABA}", "left", '561px', { fromValue: '608px'}], position: 40786, duration: 643 },
                { id: "eid472", tween: [ "style", "${_GABA}", "left", '453px', { fromValue: '561px'}], position: 41429, duration: 643 },
                { id: "eid474", tween: [ "style", "${_GABA}", "left", '366px', { fromValue: '453px'}], position: 42071, duration: 643 },
                { id: "eid476", tween: [ "style", "${_GABA}", "left", '287px', { fromValue: '366px'}], position: 42714, duration: 643 },
                { id: "eid478", tween: [ "style", "${_GABA}", "left", '169px', { fromValue: '287px'}], position: 43357, duration: 643 },
                { id: "eid916", tween: [ "style", "${_neddleCopy17}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid937", tween: [ "style", "${_neddleCopy31}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid139", tween: [ "transform", "${_bubbleThree}", "scaleX", '1.15999', { fromValue: '0.5'}], position: 6250, duration: 250 },
                { id: "eid141", tween: [ "transform", "${_bubbleThree}", "scaleX", '0.63', { fromValue: '1.15999'}], position: 6500, duration: 250 },
                { id: "eid143", tween: [ "transform", "${_bubbleThree}", "scaleX", '1.15999', { fromValue: '0.5'}], position: 6750, duration: 250 },
                { id: "eid144", tween: [ "transform", "${_bubbleThree}", "scaleX", '0.63', { fromValue: '1.15999'}], position: 7000, duration: 250 },
                { id: "eid146", tween: [ "transform", "${_bubbleThree}", "scaleX", '1.15999', { fromValue: '0.5'}], position: 7250, duration: 250 },
                { id: "eid147", tween: [ "transform", "${_bubbleThree}", "scaleX", '0.63', { fromValue: '1.15999'}], position: 7500, duration: 250 },
                { id: "eid149", tween: [ "transform", "${_bubbleThree}", "scaleX", '1.15999', { fromValue: '0.5'}], position: 7750, duration: 250 },
                { id: "eid150", tween: [ "transform", "${_bubbleThree}", "scaleX", '0.63', { fromValue: '1.15999'}], position: 8000, duration: 250 },
                { id: "eid157", tween: [ "transform", "${_bubbleThree}", "scaleX", '0.63', { fromValue: '1.15999'}], position: 8250, duration: 250 },
                { id: "eid158", tween: [ "transform", "${_bubbleThree}", "scaleX", '1.15999', { fromValue: '0.5'}], position: 8500, duration: 250 },
                { id: "eid159", tween: [ "transform", "${_bubbleThree}", "scaleX", '0.63', { fromValue: '1.15999'}], position: 8750, duration: 250 },
                { id: "eid170", tween: [ "transform", "${_bubbleThree}", "scaleX", '0.63', { fromValue: '1.15999'}], position: 9000, duration: 250 },
                { id: "eid171", tween: [ "transform", "${_bubbleThree}", "scaleX", '1.15999', { fromValue: '0.5'}], position: 9250, duration: 250 },
                { id: "eid172", tween: [ "transform", "${_bubbleThree}", "scaleX", '0.63', { fromValue: '1.15999'}], position: 9500, duration: 250 },
                { id: "eid972", tween: [ "style", "${_euphoria}", "opacity", '1', { fromValue: '0.000000'}], position: 80500, duration: 2000 },
                { id: "eid1020", tween: [ "style", "${_euphoria}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid220", tween: [ "style", "${_needle-02}", "left", '500px', { fromValue: '600px'}], position: 10000, duration: 1000 },
                { id: "eid1045", tween: [ "style", "${_Addiction}", "opacity", '1', { fromValue: '0.000000'}], position: 98000, duration: 1500 },
                { id: "eid1119", tween: [ "style", "${_Addiction}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid1128", tween: [ "style", "${_deathdown4}", "top", '629px', { fromValue: '486px'}], position: 119000, duration: 1500 },
                { id: "eid731", tween: [ "style", "${_neddleCopy2}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid736", tween: [ "style", "${_neddleCopy2}", "display", 'block', { fromValue: 'none'}], position: 73500, duration: 0 },
                { id: "eid135", tween: [ "style", "${_bubbleThree}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 250 },
                { id: "eid209", tween: [ "style", "${_bubbleThree}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid718", tween: [ "style", "${_neddleCopy17}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid749", tween: [ "style", "${_neddleCopy17}", "display", 'block', { fromValue: 'none'}], position: 75653, duration: 0 },
                { id: "eid1126", tween: [ "style", "${_deathdown4}", "opacity", '1', { fromValue: '0.000000'}], position: 116500, duration: 1500 },
                { id: "eid1129", tween: [ "style", "${_deathdown4}", "opacity", '0', { fromValue: '1'}], position: 119000, duration: 1500 },
                { id: "eid193", tween: [ "style", "${_bubbleSix}", "opacity", '1', { fromValue: '0.000000'}], position: 7552, duration: 250 },
                { id: "eid214", tween: [ "style", "${_bubbleSix}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 250 },
                { id: "eid909", tween: [ "style", "${_neddleCopy5}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid977", tween: [ "style", "${_Drowsiness}", "opacity", '1', { fromValue: '0.000000'}], position: 82500, duration: 2000 },
                { id: "eid1015", tween: [ "style", "${_Drowsiness}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid918", tween: [ "style", "${_neddleCopy25}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid724", tween: [ "style", "${_neddleCopy9}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid743", tween: [ "style", "${_neddleCopy9}", "display", 'block', { fromValue: 'none'}], position: 75373, duration: 0 },
                { id: "eid1163", tween: [ "style", "${_accidents}", "opacity", '1', { fromValue: '0.000000'}], position: 135000, duration: 1500 },
                { id: "eid191", tween: [ "transform", "${_bubbleSix}", "scaleX", '1.35', { fromValue: '0.61'}], position: 7802, duration: 250 },
                { id: "eid192", tween: [ "transform", "${_bubbleSix}", "scaleX", '0.21', { fromValue: '1.35'}], position: 8052, duration: 250 },
                { id: "eid433", tween: [ "style", "${_OpioidRecTwo}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid557", tween: [ "style", "${_OpioidRecTwo}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid1138", tween: [ "style", "${_flowers-01}", "top", '429px', { fromValue: '218px'}], position: 122750, duration: 1750 },
                { id: "eid532", tween: [ "style", "${_dopamineText}", "top", '360px', { fromValue: '317px'}], position: 46830, duration: 470 },
                { id: "eid545", tween: [ "style", "${_dopamineText}", "top", '411px', { fromValue: '360px'}], position: 47300, duration: 700 },
                { id: "eid550", tween: [ "style", "${_dopamineText}", "top", '409px', { fromValue: '411px'}], position: 48000, duration: 86 },
                { id: "eid728", tween: [ "style", "${_neddleCopy5}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid739", tween: [ "style", "${_neddleCopy5}", "display", 'block', { fromValue: 'none'}], position: 74750, duration: 0 },
                { id: "eid75", tween: [ "style", "${_spoon}", "top", '-34px', { fromValue: '-15px'}], position: 4000, duration: 1000 },
                { id: "eid1130", tween: [ "style", "${_RIP-012}", "left", '607px', { fromValue: '625px'}], position: 121000, duration: 1500 },
                { id: "eid232", tween: [ "style", "${_fill-042}", "top", '8px', { fromValue: '239px'}], position: 11250, duration: 1250 },
                { id: "eid730", tween: [ "style", "${_neddleCopy3}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid737", tween: [ "style", "${_neddleCopy3}", "display", 'block', { fromValue: 'none'}], position: 74000, duration: 0 },
                { id: "eid522", tween: [ "style", "${_gabaText}", "left", '434px', { fromValue: '534px'}], position: 41429, duration: 643 },
                { id: "eid524", tween: [ "style", "${_gabaText}", "left", '346px', { fromValue: '434px'}], position: 42071, duration: 643 },
                { id: "eid526", tween: [ "style", "${_gabaText}", "left", '272px', { fromValue: '346px'}], position: 42714, duration: 643 },
                { id: "eid927", tween: [ "style", "${_neddleCopy30}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1141", tween: [ "style", "${_causesofdeath}", "opacity", '1', { fromValue: '0.000000'}], position: 125000, duration: 1500 },
                { id: "eid979", tween: [ "style", "${_bodyMark}", "opacity", '1', { fromValue: '0.000000'}], position: 85500, duration: 1000 },
                { id: "eid1017", tween: [ "style", "${_bodyMark}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid296", tween: [ "style", "${_puncture}", "width", '17px', { fromValue: '12px'}], position: 15387, duration: 113 },
                { id: "eid369", tween: [ "style", "${_puncture}", "width", '12px', { fromValue: '17px'}], position: 16000, duration: 1000 },
                { id: "eid733", tween: [ "style", "${_neddle}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid734", tween: [ "style", "${_neddle}", "display", 'block', { fromValue: 'none'}], position: 72000, duration: 0 },
                { id: "eid992", tween: [ "style", "${_dryMouth}", "opacity", '1', { fromValue: '0.000000'}], position: 86500, duration: 1500 },
                { id: "eid1019", tween: [ "style", "${_dryMouth}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid289", tween: [ "style", "${_bodyNew}", "left", '-729px', { fromValue: '-1707px'}], position: 13500, duration: 1000 },
                { id: "eid346", tween: [ "style", "${_bodyNew}", "left", '-28px', { fromValue: '-729px'}], position: 16000, duration: 1000 },
                { id: "eid349", tween: [ "style", "${_veinLeft2}", "clip", [0,479,52,-27], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,479,52,496]}], position: 17000, duration: 2459 },
                { id: "eid665", tween: [ "style", "${_leftEyelid}", "opacity", '1', { fromValue: '0'}], position: 59000, duration: 1000 },
                { id: "eid669", tween: [ "style", "${_leftEyelid}", "opacity", '0', { fromValue: '1'}], position: 65000, duration: 250 },
                { id: "eid231", tween: [ "style", "${_fill-042}", "height", '865px', { fromValue: '183px'}], position: 11250, duration: 1250 },
                { id: "eid687", tween: [ "style", "${_bodyOne}", "opacity", '1', { fromValue: '0.000000'}], position: 67500, duration: 1000 },
                { id: "eid1123", tween: [ "style", "${_bodyOne}", "opacity", '0', { fromValue: '1'}], position: 115000, duration: 2000 },
                { id: "eid375", tween: [ "style", "${_veinLeft2}", "opacity", '0', { fromValue: '0.42520960365854'}], position: 23000, duration: 1000 },
                { id: "eid1083", tween: [ "style", "${_morphineText}", "left", '589px', { fromValue: '466px'}], position: 34000, duration: 2139 },
                { id: "eid1085", tween: [ "style", "${_morphineText}", "left", '628px', { fromValue: '589px'}], position: 36139, duration: 1528 },
                { id: "eid1122", tween: [ "transform", "${_bodyOne}", "rotateZ", '84deg', { fromValue: '0deg'}], position: 115000, duration: 2000 },
                { id: "eid725", tween: [ "style", "${_neddleCopy8}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid742", tween: [ "style", "${_neddleCopy8}", "display", 'block', { fromValue: 'none'}], position: 75310, duration: 0 },
                { id: "eid726", tween: [ "style", "${_neddleCopy7}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid741", tween: [ "style", "${_neddleCopy7}", "display", 'block', { fromValue: 'none'}], position: 75250, duration: 0 },
                { id: "eid711", tween: [ "style", "${_neddleCopy32}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid756", tween: [ "style", "${_neddleCopy32}", "display", 'block', { fromValue: 'none'}], position: 76000, duration: 0 },
                { id: "eid120", tween: [ "transform", "${_bubbleTwo}", "scaleY", '0.7896', { fromValue: '1.5792'}], position: 6500, duration: 250 },
                { id: "eid123", tween: [ "transform", "${_bubbleTwo}", "scaleY", '0.7896', { fromValue: '1.5792'}], position: 7000, duration: 250 },
                { id: "eid126", tween: [ "transform", "${_bubbleTwo}", "scaleY", '0.7896', { fromValue: '1.5792'}], position: 7500, duration: 250 },
                { id: "eid129", tween: [ "transform", "${_bubbleTwo}", "scaleY", '0.7896', { fromValue: '1.5792'}], position: 8000, duration: 250 },
                { id: "eid155", tween: [ "transform", "${_bubbleTwo}", "scaleY", '0.7896', { fromValue: '1.5792'}], position: 8250, duration: 250 },
                { id: "eid156", tween: [ "transform", "${_bubbleTwo}", "scaleY", '0.7896', { fromValue: '1.5792'}], position: 8750, duration: 250 },
                { id: "eid168", tween: [ "transform", "${_bubbleTwo}", "scaleY", '0.7896', { fromValue: '1.5792'}], position: 9000, duration: 250 },
                { id: "eid169", tween: [ "transform", "${_bubbleTwo}", "scaleY", '0.7896', { fromValue: '1.5792'}], position: 9500, duration: 250 },
                { id: "eid920", tween: [ "style", "${_neddleCopy28}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid496", tween: [ "style", "${_heroinText}", "opacity", '1', { fromValue: '0.000000'}], position: 32000, duration: 1333 },
                { id: "eid500", tween: [ "style", "${_heroinText}", "opacity", '0', { fromValue: '1'}], position: 33333, duration: 1333 },
                { id: "eid490", tween: [ "style", "${_GABA}", "opacity", '1', { fromValue: '0'}], position: 39500, duration: 643 },
                { id: "eid567", tween: [ "style", "${_GABA}", "opacity", '0', { fromValue: '1'}], position: 48172, duration: 914 },
                { id: "eid939", tween: [ "style", "${_neddleCopy2}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid355", tween: [ "style", "${_title}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1500 },
                { id: "eid357", tween: [ "style", "${_title}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 1000 },
                { id: "eid922", tween: [ "style", "${_neddleCopy16}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid438", tween: [ "style", "${_textTwo}", "opacity", '1', { fromValue: '0.000000'}], position: 30000, duration: 1000 },
                { id: "eid563", tween: [ "style", "${_textTwo}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid666", tween: [ "style", "${_rightEyelid}", "opacity", '1', { fromValue: '0'}], position: 59000, duration: 1000 },
                { id: "eid670", tween: [ "style", "${_rightEyelid}", "opacity", '0', { fromValue: '1'}], position: 65000, duration: 250 },
                { id: "eid508", tween: [ "style", "${_morphineText}", "opacity", '1', { fromValue: '0.000000'}], position: 34000, duration: 1222 },
                { id: "eid514", tween: [ "style", "${_morphineText}", "opacity", '0', { fromValue: '1'}], position: 37056, duration: 611 },
                { id: "eid605", tween: [ "style", "${_textFour}", "opacity", '1', { fromValue: '0.000000'}], position: 57000, duration: 1000 },
                { id: "eid683", tween: [ "style", "${_textFour}", "opacity", '0', { fromValue: '1'}], position: 67000, duration: 1000 },
                { id: "eid934", tween: [ "style", "${_neddleCopy20}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid400", tween: [ "style", "${_brain}", "width", '502px', { fromValue: '116px'}], position: 24000, duration: 1000 },
                { id: "eid403", tween: [ "style", "${_brain}", "width", '1198px', { fromValue: '502px'}], position: 25000, duration: 1000 },
                { id: "eid408", tween: [ "style", "${_brain}", "width", '2148px', { fromValue: '1198px'}], position: 26000, duration: 1000 },
                { id: "eid412", tween: [ "style", "${_brain}", "width", '3555px', { fromValue: '2148px'}], position: 27000, duration: 1000 },
                { id: "eid416", tween: [ "style", "${_brain}", "width", '4961px', { fromValue: '3555px'}], position: 28000, duration: 1000 },
                { id: "eid421", tween: [ "style", "${_brain}", "width", '6569px', { fromValue: '4961px'}], position: 29000, duration: 1000 },
                { id: "eid290", tween: [ "style", "${_bodyNew}", "top", '-247px', { fromValue: '-296px'}], position: 13500, duration: 1000 },
                { id: "eid344", tween: [ "style", "${_bodyNew}", "top", '89px', { fromValue: '-247px'}], position: 16000, duration: 1000 },
                { id: "eid378", tween: [ "style", "${_veinUp2}", "opacity", '0', { fromValue: '0.42520960365854'}], position: 23000, duration: 1000 },
                { id: "eid717", tween: [ "style", "${_neddleCopy16}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid750", tween: [ "style", "${_neddleCopy16}", "display", 'block', { fromValue: 'none'}], position: 75698, duration: 0 },
                { id: "eid1137", tween: [ "style", "${_flowers-01}", "left", '441px', { fromValue: '21px'}], position: 122750, duration: 1750 },
                { id: "eid194", tween: [ "transform", "${_bubbleSix}", "scaleY", '0.29609', { fromValue: '1.9035'}], position: 8052, duration: 250 },
                { id: "eid117", tween: [ "transform", "${_bubbleTwo}", "scaleX", '1.12', { fromValue: '0.51'}], position: 6250, duration: 250 },
                { id: "eid119", tween: [ "transform", "${_bubbleTwo}", "scaleX", '0.56', { fromValue: '1.12'}], position: 6500, duration: 250 },
                { id: "eid121", tween: [ "transform", "${_bubbleTwo}", "scaleX", '1.12', { fromValue: '0.51'}], position: 6750, duration: 250 },
                { id: "eid122", tween: [ "transform", "${_bubbleTwo}", "scaleX", '0.56', { fromValue: '1.12'}], position: 7000, duration: 250 },
                { id: "eid124", tween: [ "transform", "${_bubbleTwo}", "scaleX", '1.12', { fromValue: '0.51'}], position: 7250, duration: 250 },
                { id: "eid125", tween: [ "transform", "${_bubbleTwo}", "scaleX", '0.56', { fromValue: '1.12'}], position: 7500, duration: 250 },
                { id: "eid127", tween: [ "transform", "${_bubbleTwo}", "scaleX", '1.12', { fromValue: '0.51'}], position: 7750, duration: 250 },
                { id: "eid128", tween: [ "transform", "${_bubbleTwo}", "scaleX", '0.56', { fromValue: '1.12'}], position: 8000, duration: 250 },
                { id: "eid152", tween: [ "transform", "${_bubbleTwo}", "scaleX", '0.56', { fromValue: '1.12'}], position: 8250, duration: 250 },
                { id: "eid153", tween: [ "transform", "${_bubbleTwo}", "scaleX", '1.12', { fromValue: '0.51'}], position: 8500, duration: 250 },
                { id: "eid154", tween: [ "transform", "${_bubbleTwo}", "scaleX", '0.56', { fromValue: '1.12'}], position: 8750, duration: 250 },
                { id: "eid165", tween: [ "transform", "${_bubbleTwo}", "scaleX", '0.56', { fromValue: '1.12'}], position: 9000, duration: 250 },
                { id: "eid166", tween: [ "transform", "${_bubbleTwo}", "scaleX", '1.12', { fromValue: '0.51'}], position: 9250, duration: 250 },
                { id: "eid167", tween: [ "transform", "${_bubbleTwo}", "scaleX", '0.56', { fromValue: '1.12'}], position: 9500, duration: 250 },
                { id: "eid598", tween: [ "style", "${_headTwo}", "opacity", '1', { fromValue: '0.000000'}], position: 53000, duration: 1000 },
                { id: "eid684", tween: [ "style", "${_headTwo}", "opacity", '0', { fromValue: '1'}], position: 67000, duration: 1000 },
                { id: "eid1148", tween: [ "style", "${_RespiratoryFailure}", "opacity", '1', { fromValue: '0.000000'}], position: 127500, duration: 1500 },
                { id: "eid727", tween: [ "style", "${_neddleCopy6}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid740", tween: [ "style", "${_neddleCopy6}", "display", 'block', { fromValue: 'none'}], position: 75000, duration: 0 },
                { id: "eid732", tween: [ "style", "${_neddleCopy}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid735", tween: [ "style", "${_neddleCopy}", "display", 'block', { fromValue: 'none'}], position: 72750, duration: 0 },
                { id: "eid398", tween: [ "style", "${_brain}", "height", '486px', { fromValue: '112px'}], position: 24000, duration: 1000 },
                { id: "eid402", tween: [ "style", "${_brain}", "height", '1160px', { fromValue: '486px'}], position: 25000, duration: 1000 },
                { id: "eid406", tween: [ "style", "${_brain}", "height", '2080px', { fromValue: '1160px'}], position: 26000, duration: 1000 },
                { id: "eid410", tween: [ "style", "${_brain}", "height", '3442px', { fromValue: '2080px'}], position: 27000, duration: 1000 },
                { id: "eid414", tween: [ "style", "${_brain}", "height", '4803px', { fromValue: '3442px'}], position: 28000, duration: 1000 },
                { id: "eid418", tween: [ "style", "${_brain}", "height", '6360px', { fromValue: '4803px'}], position: 29000, duration: 1000 },
                { id: "eid234", tween: [ "style", "${_fill-042}", "width", '449px', { fromValue: '95px'}], position: 11250, duration: 1250 },
                { id: "eid498", tween: [ "style", "${_heroinText}", "top", '373px', { fromValue: '377px'}], position: 32000, duration: 2000 },
                { id: "eid984", tween: [ "subproperty", "${_bodyMark}", "filter.blur", '14px', { fromValue: '6px'}], position: 85500, duration: 1000 },
                { id: "eid983", tween: [ "subproperty", "${_bodyMark}", "filter.blur", '6px', { fromValue: '14px'}], position: 86500, duration: 1000 },
                { id: "eid982", tween: [ "subproperty", "${_bodyMark}", "filter.blur", '14px', { fromValue: '6px'}], position: 87500, duration: 1000 },
                { id: "eid981", tween: [ "subproperty", "${_bodyMark}", "filter.blur", '6px', { fromValue: '14px'}], position: 88500, duration: 1000 },
                { id: "eid980", tween: [ "subproperty", "${_bodyMark}", "filter.blur", '14px', { fromValue: '6px'}], position: 89500, duration: 1000 },
                { id: "eid1002", tween: [ "subproperty", "${_bodyMark}", "filter.blur", '6px', { fromValue: '14px'}], position: 90500, duration: 1000 },
                { id: "eid1003", tween: [ "subproperty", "${_bodyMark}", "filter.blur", '14px', { fromValue: '6px'}], position: 91500, duration: 1000 },
                { id: "eid548", tween: [ "style", "${_brainLabel}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid566", tween: [ "style", "${_brainLabel}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid640", tween: [ "style", "${_leftEyelid}", "top", '290px', { fromValue: '252px'}], position: 60000, duration: 1500 },
                { id: "eid644", tween: [ "style", "${_leftEyelid}", "top", '261px', { fromValue: '290px'}], position: 61500, duration: 250 },
                { id: "eid647", tween: [ "style", "${_leftEyelid}", "top", '287px', { fromValue: '262px'}], position: 61750, duration: 1500 },
                { id: "eid648", tween: [ "style", "${_leftEyelid}", "top", '261px', { fromValue: '287px'}], position: 63250, duration: 250 },
                { id: "eid655", tween: [ "style", "${_leftEyelid}", "top", '286px', { fromValue: '262px'}], position: 63500, duration: 1500 },
                { id: "eid656", tween: [ "style", "${_leftEyelid}", "top", '251px', { fromValue: '286px'}], position: 65000, duration: 250 },
                { id: "eid729", tween: [ "style", "${_neddleCopy4}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid738", tween: [ "style", "${_neddleCopy4}", "display", 'block', { fromValue: 'none'}], position: 74500, duration: 0 },
                { id: "eid926", tween: [ "style", "${_neddleCopy24}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1048", tween: [ "style", "${_Tollerance}", "opacity", '1', { fromValue: '0.000000'}], position: 99500, duration: 1500 },
                { id: "eid1110", tween: [ "style", "${_Tollerance}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid443", tween: [ "style", "${_heroin}", "left", '625px', { fromValue: '328px'}], position: 32000, duration: 4000 },
                { id: "eid1087", tween: [ "style", "${_bodyNew}", "opacity", '1', { fromValue: '1'}], position: 15500, duration: 0 },
                { id: "eid1094", tween: [ "style", "${_bodyNew}", "opacity", '0.7010924796748', { fromValue: '1'}], position: 16000, duration: 3732 },
                { id: "eid1095", tween: [ "style", "${_bodyNew}", "opacity", '1', { fromValue: '0.7010924796748'}], position: 19732, duration: 3268 },
                { id: "eid377", tween: [ "style", "${_bodyNew}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 1000 },
                { id: "eid185", tween: [ "transform", "${_bubbleFive}", "scaleX", '1.35', { fromValue: '0.61'}], position: 7052, duration: 250 },
                { id: "eid186", tween: [ "transform", "${_bubbleFive}", "scaleX", '0.21', { fromValue: '1.35'}], position: 7302, duration: 250 },
                { id: "eid715", tween: [ "style", "${_neddleCopy14}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid752", tween: [ "style", "${_neddleCopy14}", "display", 'block', { fromValue: 'none'}], position: 75796, duration: 0 },
                { id: "eid295", tween: [ "style", "${_puncture}", "top", '556px', { fromValue: '563px'}], position: 15387, duration: 113 },
                { id: "eid367", tween: [ "style", "${_puncture}", "top", '623px', { fromValue: '556px'}], position: 16000, duration: 1000 },
                { id: "eid924", tween: [ "style", "${_neddleCopy14}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid523", tween: [ "style", "${_gabaText}", "top", '202px', { fromValue: '201px'}], position: 41429, duration: 643 },
                { id: "eid525", tween: [ "style", "${_gabaText}", "top", '182px', { fromValue: '202px'}], position: 42071, duration: 643 },
                { id: "eid527", tween: [ "style", "${_gabaText}", "top", '166px', { fromValue: '182px'}], position: 42714, duration: 643 },
                { id: "eid1145", tween: [ "style", "${_heroinOverdose}", "opacity", '1', { fromValue: '0.000000'}], position: 126500, duration: 1000 },
                { id: "eid1056", tween: [ "style", "${_bodyMark2}", "opacity", '1', { fromValue: '0.000000'}], position: 103500, duration: 1000 },
                { id: "eid1118", tween: [ "style", "${_bodyMark2}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid706", tween: [ "style", "${_neddleCopy27}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid761", tween: [ "style", "${_neddleCopy27}", "display", 'block', { fromValue: 'none'}], position: 76250, duration: 0 },
                { id: "eid936", tween: [ "style", "${_neddleCopy23}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid435", tween: [ "style", "${_gabaRec}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid555", tween: [ "style", "${_gabaRec}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid989", tween: [ "style", "${_body}", "opacity", '1', { fromValue: '0.000000'}], position: 85500, duration: 1000 },
                { id: "eid1023", tween: [ "style", "${_body}", "opacity", '0', { fromValue: '1'}], position: 94500, duration: 1000 },
                { id: "eid929", tween: [ "style", "${_neddleCopy27}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1059", tween: [ "subproperty", "${_bodyMark2}", "filter.blur", '14px', { fromValue: '6px'}], position: 103500, duration: 1000 },
                { id: "eid1061", tween: [ "subproperty", "${_bodyMark2}", "filter.blur", '6px', { fromValue: '14px'}], position: 104500, duration: 1000 },
                { id: "eid1062", tween: [ "subproperty", "${_bodyMark2}", "filter.blur", '14px', { fromValue: '6px'}], position: 105500, duration: 1000 },
                { id: "eid1063", tween: [ "subproperty", "${_bodyMark2}", "filter.blur", '6px', { fromValue: '14px'}], position: 106500, duration: 1000 },
                { id: "eid1064", tween: [ "subproperty", "${_bodyMark2}", "filter.blur", '14px', { fromValue: '6px'}], position: 107500, duration: 1000 },
                { id: "eid1065", tween: [ "subproperty", "${_bodyMark2}", "filter.blur", '6px', { fromValue: '14px'}], position: 108500, duration: 1000 },
                { id: "eid1066", tween: [ "subproperty", "${_bodyMark2}", "filter.blur", '14px', { fromValue: '6px'}], position: 109500, duration: 1000 },
                { id: "eid1067", tween: [ "subproperty", "${_bodyMark2}", "filter.blur", '6px', { fromValue: '14px'}], position: 110500, duration: 1000 },
                { id: "eid1166", tween: [ "style", "${_homicide}", "opacity", '1', { fromValue: '0.000000'}], position: 136500, duration: 1500 },
                { id: "eid935", tween: [ "style", "${_neddleCopy9}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid142", tween: [ "transform", "${_bubbleThree}", "scaleY", '0.8883', { fromValue: '1.6356'}], position: 6500, duration: 250 },
                { id: "eid145", tween: [ "transform", "${_bubbleThree}", "scaleY", '0.8883', { fromValue: '1.6356'}], position: 7000, duration: 250 },
                { id: "eid148", tween: [ "transform", "${_bubbleThree}", "scaleY", '0.8883', { fromValue: '1.6356'}], position: 7500, duration: 250 },
                { id: "eid151", tween: [ "transform", "${_bubbleThree}", "scaleY", '0.8883', { fromValue: '1.6356'}], position: 8000, duration: 250 },
                { id: "eid160", tween: [ "transform", "${_bubbleThree}", "scaleY", '0.8883', { fromValue: '1.6356'}], position: 8250, duration: 250 },
                { id: "eid161", tween: [ "transform", "${_bubbleThree}", "scaleY", '0.8883', { fromValue: '1.6356'}], position: 8750, duration: 250 },
                { id: "eid173", tween: [ "transform", "${_bubbleThree}", "scaleY", '0.8883', { fromValue: '1.6356'}], position: 9000, duration: 250 },
                { id: "eid174", tween: [ "transform", "${_bubbleThree}", "scaleY", '0.8883', { fromValue: '1.6356'}], position: 9500, duration: 250 },
                { id: "eid1030", tween: [ "style", "${_mind2}", "opacity", '1', { fromValue: '0.000000'}], position: 97000, duration: 1000 },
                { id: "eid1116", tween: [ "style", "${_mind2}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid293", tween: [ "style", "${_puncture}", "opacity", '1', { fromValue: '0'}], position: 15387, duration: 113 },
                { id: "eid376", tween: [ "style", "${_puncture}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 1000 },
                { id: "eid244", tween: [ "transform", "${_flame}", "skewY", '-10deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
                { id: "eid264", tween: [ "transform", "${_flame}", "skewY", '0deg', { fromValue: '-10deg'}], position: 3000, duration: 1000 },
                { id: "eid266", tween: [ "transform", "${_flame}", "skewY", '-10deg', { fromValue: '0deg'}], position: 4000, duration: 1000 },
                { id: "eid267", tween: [ "transform", "${_flame}", "skewY", '0deg', { fromValue: '-10deg'}], position: 5000, duration: 1000 },
                { id: "eid270", tween: [ "transform", "${_flame}", "skewY", '-10deg', { fromValue: '0deg'}], position: 6000, duration: 1000 },
                { id: "eid271", tween: [ "transform", "${_flame}", "skewY", '0deg', { fromValue: '-10deg'}], position: 7000, duration: 1000 },
                { id: "eid274", tween: [ "transform", "${_flame}", "skewY", '-10deg', { fromValue: '0deg'}], position: 8000, duration: 1000 },
                { id: "eid275", tween: [ "transform", "${_flame}", "skewY", '0deg', { fromValue: '-10deg'}], position: 9000, duration: 1000 },
                { id: "eid1076", tween: [ "style", "${_InfectionHeart}", "opacity", '1', { fromValue: '0.000000'}], position: 106000, duration: 1500 },
                { id: "eid1111", tween: [ "style", "${_InfectionHeart}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid1093", tween: [ "style", "${_fill2}", "opacity", '0', { fromValue: '1'}], position: 12750, duration: 1250 },
                { id: "eid606", tween: [ "style", "${_headTwo}", "left", '156px', { fromValue: '170px'}], position: 60000, duration: 1500 },
                { id: "eid608", tween: [ "style", "${_headTwo}", "left", '142px', { fromValue: '156px'}], position: 61500, duration: 250 },
                { id: "eid626", tween: [ "style", "${_headTwo}", "left", '162px', { fromValue: '151px'}], position: 61750, duration: 1500 },
                { id: "eid627", tween: [ "style", "${_headTwo}", "left", '142px', { fromValue: '162px'}], position: 63250, duration: 250 },
                { id: "eid630", tween: [ "style", "${_headTwo}", "left", '166px', { fromValue: '151px'}], position: 63500, duration: 1500 },
                { id: "eid631", tween: [ "style", "${_headTwo}", "left", '153px', { fromValue: '166px'}], position: 65000, duration: 250 },
                { id: "eid709", tween: [ "style", "${_neddleCopy30}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid758", tween: [ "style", "${_neddleCopy30}", "display", 'block', { fromValue: 'none'}], position: 76088, duration: 0 },
                { id: "eid1084", tween: [ "style", "${_morphineText}", "top", '367px', { fromValue: '373px'}], position: 34000, duration: 2139 },
                { id: "eid1086", tween: [ "style", "${_morphineText}", "top", '273px', { fromValue: '367px'}], position: 36139, duration: 1528 },
                { id: "eid921", tween: [ "style", "${_neddleCopy4}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid719", tween: [ "style", "${_neddleCopy18}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid748", tween: [ "style", "${_neddleCopy18}", "display", 'block', { fromValue: 'none'}], position: 75595, duration: 0 },
                { id: "eid558", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 341 },
                { id: "eid697", tween: [ "style", "${_textFive}", "opacity", '1', { fromValue: '0.000000'}], position: 69500, duration: 1000 },
                { id: "eid933", tween: [ "style", "${_textFive}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid579", tween: [ "style", "${_headOne}", "opacity", '1', { fromValue: '0.000000'}], position: 49500, duration: 1000 },
                { id: "eid600", tween: [ "style", "${_headOne}", "opacity", '0.000000', { fromValue: '1'}], position: 53000, duration: 1000 },
                { id: "eid497", tween: [ "style", "${_heroinText}", "left", '472px', { fromValue: '325px'}], position: 32000, duration: 2000 },
                { id: "eid499", tween: [ "style", "${_heroinText}", "left", '522px', { fromValue: '472px'}], position: 34000, duration: 667 },
                { id: "eid1127", tween: [ "style", "${_deathdown4}", "left", '117px', { fromValue: '123px'}], position: 119000, duration: 1500 },
                { id: "eid637", tween: [ "style", "${_rightEyelid}", "left", '314px', { fromValue: '330px'}], position: 60000, duration: 1500 },
                { id: "eid641", tween: [ "style", "${_rightEyelid}", "left", '314px', { fromValue: '314px'}], position: 61500, duration: 250 },
                { id: "eid649", tween: [ "style", "${_rightEyelid}", "left", '320px', { fromValue: '311px'}], position: 61750, duration: 1500 },
                { id: "eid650", tween: [ "style", "${_rightEyelid}", "left", '314px', { fromValue: '320px'}], position: 63250, duration: 250 },
                { id: "eid657", tween: [ "style", "${_rightEyelid}", "left", '324px', { fromValue: '311px'}], position: 63500, duration: 1500 },
                { id: "eid658", tween: [ "style", "${_rightEyelid}", "left", '325px', { fromValue: '324px'}], position: 65000, duration: 250 },
                { id: "eid710", tween: [ "style", "${_neddleCopy31}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid757", tween: [ "style", "${_neddleCopy31}", "display", 'block', { fromValue: 'none'}], position: 76047, duration: 0 },
                { id: "eid1026", tween: [ "style", "${_longTerm}", "opacity", '1', { fromValue: '0.000000'}], position: 95500, duration: 1500 },
                { id: "eid1115", tween: [ "style", "${_longTerm}", "opacity", '0', { fromValue: '1'}], position: 113000, duration: 1500 },
                { id: "eid940", tween: [ "style", "${_neddleCopy13}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid639", tween: [ "style", "${_leftEyelid}", "left", '224px', { fromValue: '240px'}], position: 60000, duration: 1500 },
                { id: "eid643", tween: [ "style", "${_leftEyelid}", "left", '224px', { fromValue: '224px'}], position: 61500, duration: 250 },
                { id: "eid645", tween: [ "style", "${_leftEyelid}", "left", '230px', { fromValue: '221px'}], position: 61750, duration: 1500 },
                { id: "eid646", tween: [ "style", "${_leftEyelid}", "left", '224px', { fromValue: '230px'}], position: 63250, duration: 250 },
                { id: "eid653", tween: [ "style", "${_leftEyelid}", "left", '234px', { fromValue: '221px'}], position: 63500, duration: 1500 },
                { id: "eid654", tween: [ "style", "${_leftEyelid}", "left", '235px', { fromValue: '234px'}], position: 65000, duration: 250 },
                { id: "eid1136", tween: [ "transform", "${_flowers-01}", "rotateZ", '74deg', { fromValue: '0deg'}], position: 122750, duration: 1750 },
                { id: "eid908", tween: [ "style", "${_neddleCopy8}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid938", tween: [ "style", "${_neddleCopy}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid1157", tween: [ "style", "${_arrhythmia}", "opacity", '1', { fromValue: '0.000000'}], position: 132000, duration: 1540 },
                { id: "eid530", tween: [ "style", "${_dopamineText}", "opacity", '1', { fromValue: '0.000000'}], position: 46830, duration: 1170 },
                { id: "eid565", tween: [ "style", "${_dopamineText}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid444", tween: [ "style", "${_heroin}", "top", '390px', { fromValue: '417px'}], position: 32000, duration: 4000 },
                { id: "eid708", tween: [ "style", "${_neddleCopy29}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid759", tween: [ "style", "${_neddleCopy29}", "display", 'block', { fromValue: 'none'}], position: 76136, duration: 0 },
                { id: "eid913", tween: [ "style", "${_neddleCopy18}", "opacity", '0', { fromValue: '1'}], position: 77500, duration: 1000 },
                { id: "eid607", tween: [ "style", "${_headTwo}", "top", '122px', { fromValue: '93px'}], position: 60000, duration: 1500 },
                { id: "eid609", tween: [ "style", "${_headTwo}", "top", '104px', { fromValue: '122px'}], position: 61500, duration: 250 },
                { id: "eid628", tween: [ "style", "${_headTwo}", "top", '117px', { fromValue: '103px'}], position: 61750, duration: 1500 },
                { id: "eid629", tween: [ "style", "${_headTwo}", "top", '104px', { fromValue: '117px'}], position: 63250, duration: 250 },
                { id: "eid632", tween: [ "style", "${_headTwo}", "top", '116px', { fromValue: '103px'}], position: 63500, duration: 1500 },
                { id: "eid633", tween: [ "style", "${_headTwo}", "top", '94px', { fromValue: '116px'}], position: 65000, duration: 250 },
                { id: "eid1154", tween: [ "style", "${_infectiousE}", "opacity", '1', { fromValue: '0.000000'}], position: 130500, duration: 1500 },
                { id: "eid873", tween: [ "style", "${_Needles}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid698", tween: [ "style", "${_Needles}", "display", 'none', { fromValue: 'none'}], position: 71000, duration: 0 },
                { id: "eid700", tween: [ "style", "${_Needles}", "display", 'block', { fromValue: 'none'}], position: 72000, duration: 0 },
                { id: "eid188", tween: [ "transform", "${_bubbleFive}", "scaleY", '0.29609', { fromValue: '1.9035'}], position: 7302, duration: 250 },
                { id: "eid432", tween: [ "style", "${_opioidRepOne}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 1000 },
                { id: "eid559", tween: [ "style", "${_opioidRepOne}", "opacity", '0', { fromValue: '1'}], position: 49086, duration: 914 },
                { id: "eid712", tween: [ "style", "${_neddleCopy11}", "display", 'none', { fromValue: 'block'}], position: 71000, duration: 0 },
                { id: "eid755", tween: [ "style", "${_neddleCopy11}", "display", 'block', { fromValue: 'none'}], position: 75940, duration: 0 },
                { id: "eid401", tween: [ "style", "${_brain}", "left", '-51px', { fromValue: '176px'}], position: 24000, duration: 1000 },
                { id: "eid405", tween: [ "style", "${_brain}", "left", '-296px', { fromValue: '-51px'}], position: 25000, duration: 1000 },
                { id: "eid407", tween: [ "style", "${_brain}", "left", '-780px', { fromValue: '-296px'}], position: 26000, duration: 1000 },
                { id: "eid411", tween: [ "style", "${_brain}", "left", '-1685px', { fromValue: '-780px'}], position: 27000, duration: 1000 },
                { id: "eid417", tween: [ "style", "${_brain}", "left", '-2613px', { fromValue: '-1685px'}], position: 28000, duration: 1000 },
                { id: "eid420", tween: [ "style", "${_brain}", "left", '-3338px', { fromValue: '-2613px'}], position: 29000, duration: 1000 },
                { id: "eid634", tween: [ "style", "${_brain}", "left", '-3342px', { fromValue: '-3342px'}], position: 65250, duration: 0 },
                { id: "eid238", tween: [ "style", "${_spoon}", "opacity", '0', { fromValue: '1'}], position: 12750, duration: 1250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-12072373");
