//#region ประกาศตัวแปร
var canvasWidth = 200;
var canvasHeight = 267;
var width = 125;
var height = 105;
var padding = 25;
var lineWidth = 3;

var primaryColor = "#ffc821";
var secondaryColor = "#faf100";
var tertiaryColor = "#dcaa09";
//#endregion ประกาศตัวแปร
//#region setตัวอักษรด้านบน
function writeMessage(message) {
	text.setText(message);
	layer.draw();
  }
//#endregion setตัวอักษรด้านบน
//#region สร้างstage 
var stageWidth = 1000;
var stageHeight = 700;

var stage = new Konva.Stage({
    container: 'canvas',
    width: stageWidth,
    height: stageHeight
});
//#endregion สร้างstage 
//#region สร้างlayerและโครงสร้างitemทั้งหมดในstage
  var layer = new Konva.Layer();
  var text = new Konva.Text({
	x: stage.width() - 850,
	y: stage.height() - 650,
	fontFamily: 'cordia',
	fontSize: 42,
	text: '',
	fill: '#663300',
	shadowColor: 'black',
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.5,
  });
  var floor3 = new Konva.Rect({
	x: stage.width() - 650,
	y: stage.height() - 200,
	width: 300,
	height: 70,
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 3
  });
  var textfloor3 = new Konva.Text({
	x: stage.width() - 530,
	y: stage.height() - 180,
	fontFamily: 'Calibri',
	fontSize: 20,
	text: 'ชั้น 3',
	fill: 'black'
  });
  var floor4 = new Konva.Rect({
	x: stage.width() - 650,
	y: stage.height() - 270,
	width: 300,
	height: 70,
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 3
  });
  var textfloor4 = new Konva.Text({
	x: stage.width() - 530,
	y: stage.height() - 250,
	fontFamily: 'Calibri',
	fontSize: 20,
	text: 'ชั้น 4',
	fill: 'black'
  });
  var floor5 = new Konva.Rect({
	x: stage.width() - 650,
	y: stage.height() - 340,
	width: 300,
	height: 70,
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 3
  });
  var textfloor5 = new Konva.Text({
	x: stage.width() - 530,
	y: stage.height() - 320,
	fontFamily: 'Calibri',
	fontSize: 20,
	text: 'ชั้น 5',
	fill: 'black'
  });
  var floor6 = new Konva.Rect({
	x: stage.width() - 650,
	y: stage.height() - 410,
	width: 300,
	height: 70,
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 3
  });
  var textfloor6 = new Konva.Text({
	x: stage.width() - 530,
	y: stage.height() - 390,
	fontFamily: 'Calibri',
	fontSize: 20,
	text: 'ชั้น 6',
	fill: 'black'
  });
  var floor7 = new Konva.Rect({
	x: stage.width() - 650,
	y: stage.height() - 480,
	width: 300,
	height: 70,
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 3
  });
  var textfloor7 = new Konva.Text({
	x: stage.width() - 530,
	y: stage.height() - 460,
	fontFamily: 'Calibri',
	fontSize: 20,
	text: 'ชั้น 7',
	fill: 'black'
  });

//#region สร้างitemชั้น3
  var f3all = new Konva.Rect({
	fill: '#FFDAB9',
	stroke: 'black',
	strokeWidth: 3
  });
  var textf3all = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f3out = new Konva.Rect({
   fill: 'gray',
   stroke: 'black',
   strokeWidth: 1,
	 shadowBlur: 10,
	 shadowOffset: [15, 15],
	 shadowOpacity: 0.9,
  });
  var textf3out = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f3ToiletWoman1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf3ToiletWoman1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f3ToiletMan1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf3ToiletMan1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f3lift1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf3lift1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f3lift2 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf3lift2 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f3lift3 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf3lift3 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f3lift4 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf3lift4 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var F3A01 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A01 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A02 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A02 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A03 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A03 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A04 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A04 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A05 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A05 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A06 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A06 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A07 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A07 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A08 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A08 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A09 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A09 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A10 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A10 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A11 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF3A11 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A12 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
	
  });
  var textF3A12 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F3A13 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowColor: 'black',
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
  });
  var textF3A13 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var f3Toilet = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowColor: 'black',
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
		
  });
  var textf3Toilet = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
	});
	
	var F3doorfont = new Konva.Wedge({
		radius: 70,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -180,
		shadowColor: 'black',
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});

	var F3doorExit = new Konva.Wedge({
		x:-150,
		y:-150,
		radius: 40,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -0,
		shadowColor: 'black',
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});
  //#endregion สร้างitemชั้น3

//#region สร้างitemชั้น4
var f4all = new Konva.Rect({
	fill: '#FFDAB9',
	stroke: 'black',
	strokeWidth: 3
  });
  var textf4all = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f4out = new Konva.Rect({
   fill: 'gray',
   stroke: 'black',
   strokeWidth: 1,
	 shadowBlur: 10,
	 shadowOffset: [15, 15],
	 shadowOpacity: 0.9,
  });
  var textf4out = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f4ToiletWoman1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf4ToiletWoman1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f4ToiletMan1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf4ToiletMan1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f4lift1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf4lift1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f4lift2 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf4lift2 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f4lift3 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf4lift3 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f4lift4 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf4lift4 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var staff = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textstaff = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F4A01 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF4A01 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F4A02 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF4A02 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F4A03 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF4A03 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F4A04 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF4A04 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F4A05 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF4A05 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F4A06 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF4A06 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F4A07 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF4A07 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F4A08 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF4A08 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var f4Toilet = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf4Toilet = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var F4doorfont = new Konva.Wedge({
		radius: 70,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -180,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});

	var F4doorExit = new Konva.Wedge({
		x:-50,
		y:-50,
		radius: 40,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -0,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});
//#endregion สร้างitemชั้น4

//#region สร้างitemชั้น5
var f5all = new Konva.Rect({
	fill: '#FFDAB9',
	stroke: 'black',
	strokeWidth: 3
  });
  var textf5all = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f5out = new Konva.Rect({
   fill: 'gray',
   stroke: 'black',
   strokeWidth: 1,
	 shadowBlur: 10,
	 shadowOffset: [15, 15],
	 shadowOpacity: 0.9,
  });
  var textf5out = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f5ToiletWoman1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf5ToiletWoman1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f5ToiletMan1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf5ToiletMan1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f5lift1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf5lift1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f5lift2 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf5lift2 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f5lift3 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf5lift3 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f5lift4 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf5lift4 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var F5A01 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF5A01 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
	});
	var testcenter = new Konva.Rect({
		fill: '#754a0e',
		stroke: 'black',
		strokeWidth: 1,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
		});
	var texttestcenter = new Konva.Text({
		fontFamily: 'Calibri',
		fontSize: 14,
		text: '',
		fill: 'white'
		});
  var F5A03 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF5A03 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F5A04 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF5A04 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F5A05 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF5A05 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F5A06 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF5A06 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  
  var F5A08 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF5A08 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F5A09 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF5A09 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F5A10 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF5A10 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var f5Toilet = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf5Toilet = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var F5doorfont = new Konva.Wedge({
		radius: 70,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -180,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});

	var F5doorExit = new Konva.Wedge({
		x:-50,
		y:-50,
		radius: 40,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -0,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});
//#endregion สร้างitemชั้น5

//#region สร้างitemชั้น6
var f6all = new Konva.Rect({
	fill: '#FFDAB9',
	stroke: 'black',
	strokeWidth: 3
  });
  var textf6all = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f6out = new Konva.Rect({
   fill: 'gray',
   stroke: 'black',
   strokeWidth: 1,
	 shadowBlur: 10,
	 shadowOffset: [15, 15],
	 shadowOpacity: 0.9,
  });
  var textf6out = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f6ToiletWoman1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf6ToiletWoman1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f6ToiletMan1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf6ToiletMan1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f6lift1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf6lift1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f6lift2 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf6lift2 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f6lift3 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf6lift3 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f6lift4 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf6lift4 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var F6A01 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF6A01 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
	});
	var closeroom = new Konva.Rect({
		fill: '#754a0e',
		stroke: 'black',
		strokeWidth: 1,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
		});
	var textcloseroom = new Konva.Text({
		fontFamily: 'Calibri',
		fontSize: 14,
		text: '',
		fill: 'white'
		});
		var F6A02 = new Konva.Rect({
			fill: '#754a0e',
			stroke: 'black',
			strokeWidth: 1,
			shadowBlur: 10,
			shadowOffset: [15, 15],
			shadowOpacity: 0.9,
			});
			var textF6A02 = new Konva.Text({
			fontFamily: 'Calibri',
			fontSize: 14,
			text: '',
			fill: 'white'
			});
  var F6A03 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF6A03 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F6A04 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF6A04 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F6A05 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF6A05 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F6A06 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF6A06 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
	var F6A07 = new Konva.Rect({
		fill: '#754a0e',
		stroke: 'black',
		strokeWidth: 1,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
		});
		var textF6A07 = new Konva.Text({
		fontFamily: 'Calibri',
		fontSize: 14,
		text: '',
		fill: 'white'
		});
  var F6A08 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF6A08 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F6A09 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF6A09 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F6A10 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF6A10 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
	});
	var F6A11 = new Konva.Rect({
		fill: '#754a0e',
		stroke: 'black',
		strokeWidth: 1,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
		});
		var textF6A11 = new Konva.Text({
		fontFamily: 'Calibri',
		fontSize: 14,
		text: '',
		fill: 'white'
		});
		var F6A12 = new Konva.Rect({
			fill: '#754a0e',
			stroke: 'black',
			strokeWidth: 1,
			shadowBlur: 10,
			shadowOffset: [15, 15],
			shadowOpacity: 0.9,
			});
			var textF6A12 = new Konva.Text({
			fontFamily: 'Calibri',
			fontSize: 14,
			text: '',
			fill: 'white'
			});

			var F6A13 = new Konva.Rect({
				fill: '#754a0e',
				stroke: 'black',
				strokeWidth: 1,
				shadowBlur: 10,
				shadowOffset: [15, 15],
				shadowOpacity: 0.9,
				});
				var textF6A13 = new Konva.Text({
				fontFamily: 'Calibri',
				fontSize: 14,
				text: '',
				fill: 'white'
				});
  var f6Toilet = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf6Toilet = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var F6doorfont = new Konva.Wedge({
		radius: 70,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -180,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});

	var F6doorExit = new Konva.Wedge({
		x:-50,
		y:-50,
		radius: 40,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -0,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});
//#endregion สร้างitemชั้น6


//#region สร้างitemชั้น7
var f7all = new Konva.Rect({
	fill: '#FFDAB9',
	stroke: 'black',
	strokeWidth: 3
  });
  var textf7all = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f7out = new Konva.Rect({
   fill: 'gray',
   stroke: 'black',
   strokeWidth: 1,
	 shadowBlur: 10,
	 shadowOffset: [15, 15],
	 shadowOpacity: 0.9,
  });
  var textf7out = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 20,
	text: '',
	fill: 'black'
  });
  var f7ToiletWoman1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf7ToiletWoman1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f7ToiletMan1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf7ToiletMan1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f7lift1 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf7lift1 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f7lift2 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf7lift2 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f7lift3 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf7lift3 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var f7lift4 = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf7lift4 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var F7A01 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF7A01 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
	});

		var F7A02 = new Konva.Rect({
			fill: '#754a0e',
			stroke: 'black',
			strokeWidth: 1,
			shadowBlur: 10,
			shadowOffset: [15, 15],
			shadowOpacity: 0.9,
			});
			var textF7A02 = new Konva.Text({
			fontFamily: 'Calibri',
			fontSize: 14,
			text: '',
			fill: 'white'
			});
  var F7A03 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF7A03 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F7A04 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF7A04 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F7A05 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF7A05 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var F7A06 = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textF7A06 = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
	var F7A07 = new Konva.Rect({
		fill: '#754a0e',
		stroke: 'black',
		strokeWidth: 1,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
		});
		var textF7A07 = new Konva.Text({
		fontFamily: 'Calibri',
		fontSize: 14,
		text: '',
		fill: 'white'
		});
  var adminroom = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textAdminroom = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var teacherRoom = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textTeacherRoom = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
  });
  var meetingRoom = new Konva.Rect({
	fill: '#754a0e',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textMeetingRoom = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 14,
	text: '',
	fill: 'white'
	});
	var mirrorRoom = new Konva.Rect({
		fill: '#754a0e',
		stroke: 'black',
		strokeWidth: 1,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
		});
		var textMirrorRoom = new Konva.Text({
		fontFamily: 'Calibri',
		fontSize: 14,
		text: '',
		fill: 'white'
		});
	
  var f7Toilet = new Konva.Rect({
	fill: 'black',
	stroke: 'black',
	strokeWidth: 1,
	shadowBlur: 10,
	shadowOffset: [15, 15],
	shadowOpacity: 0.9,
  });
  var textf7Toilet = new Konva.Text({
	fontFamily: 'Calibri',
	fontSize: 10,
	text: '',
	fill: 'white'
  });
  var F7doorfont = new Konva.Wedge({
		radius: 70,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -180,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});

	var F7doorExit = new Konva.Wedge({
		x:-50,
		y:-50,
		radius: 40,
		angle: 90,
		fill: '#FFFF99',
		stroke: 'black',
		strokeWidth: 2,
		rotation: -0,
		shadowBlur: 10,
		shadowOffset: [15, 15],
		shadowOpacity: 0.9,
	});
//#endregion สร้างitemชั้น7
//#endregion สร้างlayerและโครงสร้างitemทั้งหมดในstage
 
//#region กำหนดhandleให้ชั้นต่างๆ
  floor3.on('mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3');
	var fill = this.fill() == '#00FF99' ? '#754a0e' : '#00FF99';
	this.fill(fill);
	layer.draw();
  });
  floor3.on('mouseout', function () {
	document.body.style.cursor = 'default';
	var fill = this.fill() == '#754a0e' ? '#00FF99' : '#754a0e';
	this.fill(fill);
	layer.draw();
  });
  floor3.on('mousedown touchstart', function () {
	document.body.style.cursor = 'pointer';
	// $("#tempFloor").val(3);
	getMap3();

  });
  floor4.on('mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4');
	var fill = this.fill() == '#00FF99' ? '#754a0e' : '#00FF99';
	this.fill(fill);
	layer.draw();
  });
  floor4.on('mouseout', function () {
	document.body.style.cursor = 'default';
	var fill = this.fill() == '#754a0e' ? '#00FF99' : '#754a0e';
	this.fill(fill);
	layer.draw();
  });
  floor4.on('mousedown touchstart', function () {
	document.body.style.cursor = 'pointer';
	// $("#tempFloor").val(4);
	getMap4();
  });
  floor5.on('mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5');
	var fill = this.fill() == '#00FF99' ? '#754a0e' : '#00FF99';
	this.fill(fill);
	layer.draw();
  });
  floor5.on('mouseout', function () {
	document.body.style.cursor = 'default';
	var fill = this.fill() == '#754a0e' ? '#00FF99' : '#754a0e';
	this.fill(fill);
	layer.draw();
  });
  floor5.on('mousedown touchstart', function () {
	document.body.style.cursor = 'pointer';
	// $("#tempFloor").val(4);
	getMap5();
  });
  floor6.on('mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6');
	var fill = this.fill() == '#00FF99' ? '#754a0e' : '#00FF99';
	this.fill(fill);
	layer.draw();
  });
  floor6.on('mouseout', function () {
	document.body.style.cursor = 'default';
	var fill = this.fill() == '#754a0e' ? '#00FF99' : '#754a0e';
	this.fill(fill);
	layer.draw();
  });
  floor6.on('mousedown touchstart', function () {
	document.body.style.cursor = 'pointer';
	getMap6();
  });
  floor7.on('mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7');
	var fill = this.fill() == '#00FF99' ? '#754a0e' : '#00FF99';
	this.fill(fill);
	layer.draw();
  });
  floor7.on('mouseout', function () {
	document.body.style.cursor = 'default';
	var fill = this.fill() == '#754a0e' ? '#00FF99' : '#754a0e';
	this.fill(fill);
	layer.draw();
  });
  floor7.on('mousedown touchstart', function () {
	document.body.style.cursor = 'pointer';
	getMap7();
  });
  //#endregion กำหนดhandleให้ชั้นต่างๆ
//#region additemเข้าไปในlayerและaddlayerเข้าstage  
  layer.add(floor3);
  layer.add(floor4);
  layer.add(floor5);
  layer.add(floor6);
  layer.add(floor7);
  layer.add(textfloor3);
  layer.add(textfloor4);
  layer.add(textfloor5);
  layer.add(textfloor6);
  layer.add(textfloor7);
  layer.add(text);

  //#region addชั้น3
  layer.add(f3all);
  layer.add(f3out);
  layer.add(f3ToiletWoman1);
  layer.add(f3ToiletMan1);
  layer.add(f3lift1);
  layer.add(f3lift2);
  layer.add(f3lift3);
  layer.add(f3lift4);
  layer.add(F3A01);
  layer.add(F3A02);
  layer.add(F3A03);
  layer.add(F3A04);
  layer.add(F3A05);
  layer.add(F3A06);
  layer.add(F3A07);
  layer.add(F3A08);
  layer.add(F3A09);
  layer.add(F3A10);
  layer.add(F3A11);
  layer.add(F3A12);
  layer.add(F3A13);
  layer.add(f3Toilet);

  layer.add(textf3all);
  layer.add(textf3out);
  layer.add(textf3ToiletWoman1);
  layer.add(textf3ToiletMan1);
  layer.add(textF3A01);
  layer.add(textF3A02);
  layer.add(textF3A03);
  layer.add(textF3A04);
  layer.add(textF3A05);
  layer.add(textF3A06);
  layer.add(textF3A07);
  layer.add(textF3A08);
  layer.add(textF3A09);
  layer.add(textF3A10);
  layer.add(textF3A11);
  layer.add(textF3A12);
  layer.add(textF3A13);
  layer.add(textf3Toilet);
  layer.add(textf3lift1);
  layer.add(textf3lift2);
  layer.add(textf3lift3);
	layer.add(textf3lift4);
	layer.add(F3doorfont);
	layer.add(F3doorExit);
 //#endregion addชั้น3

 //#region addชั้น4
  layer.add(f4all);
  layer.add(f4out);
  layer.add(f4ToiletWoman1);
  layer.add(f4ToiletMan1);
  layer.add(f4lift1);
  layer.add(f4lift2);
  layer.add(f4lift3);
  layer.add(f4lift4);
  layer.add(staff);
  layer.add(F4A01);
  layer.add(F4A02);
  layer.add(F4A03);
  layer.add(F4A04);
  layer.add(F4A05);
  layer.add(F4A06);
  layer.add(F4A07);
  layer.add(F4A08);
  layer.add(f4Toilet);

  layer.add(textf4all);
  layer.add(textf4out);
  layer.add(textf4ToiletWoman1);
  layer.add(textf4ToiletMan1);
  layer.add(textstaff);
  layer.add(textF4A01);
  layer.add(textF4A02);
  layer.add(textF4A03);
  layer.add(textF4A04);
  layer.add(textF4A05);
  layer.add(textF4A06);
  layer.add(textF4A07);
  layer.add(textF4A08);
  
  layer.add(textf4Toilet);
  layer.add(textf4lift1);
  layer.add(textf4lift2);
  layer.add(textf4lift3);
	layer.add(textf4lift4);
	layer.add(F4doorfont);
	layer.add(F4doorExit);
 //#endregion addชั้น4

  //#region addชั้น5
  layer.add(f5all);
  layer.add(f5out);
  layer.add(f5ToiletWoman1);
  layer.add(f5ToiletMan1);
  layer.add(f5lift1);
  layer.add(f5lift2);
  layer.add(f5lift3);
  layer.add(f5lift4);
	layer.add(F5A01);	
	layer.add(testcenter);
  layer.add(F5A03);
  layer.add(F5A04);
  layer.add(F5A05);
  layer.add(F5A06);
  layer.add(F5A08);
  layer.add(F5A09);
  layer.add(F5A10);
  layer.add(f5Toilet);

  layer.add(textf5all);
  layer.add(textf5out);
  layer.add(textf5ToiletWoman1);
  layer.add(textf5ToiletMan1);
	layer.add(textF5A01);	
	layer.add(texttestcenter);
  layer.add(textF5A03);
  layer.add(textF5A04);
  layer.add(textF5A05);
  layer.add(textF5A06);
  layer.add(textF5A08);
  layer.add(textF5A09);
  layer.add(textF5A10);
  layer.add(textf5Toilet);
  layer.add(textf5lift1);
  layer.add(textf5lift2);
  layer.add(textf5lift3);
	layer.add(textf5lift4);
	layer.add(F5doorfont);
	layer.add(F5doorExit);
 //#endregion addชั้น5

 //#region addชั้น6
 layer.add(f6all);
 layer.add(f6out);
 layer.add(f6ToiletWoman1);
 layer.add(f6ToiletMan1);
 layer.add(f6lift1);
 layer.add(f6lift2);
 layer.add(f6lift3);
 layer.add(f6lift4);
 layer.add(F6A01);	
 layer.add(F6A02);	
 layer.add(closeroom);
 layer.add(F6A03);
 layer.add(F6A04);
 layer.add(F6A05);
 layer.add(F6A06);
 layer.add(F6A07);	
 layer.add(F6A08);
 layer.add(F6A09);
 layer.add(F6A10);
 layer.add(F6A11);
 layer.add(F6A12);
 layer.add(F6A13);
 layer.add(f6Toilet);

 layer.add(textf6all);
 layer.add(textf6out);
 layer.add(textf6ToiletWoman1);
 layer.add(textf6ToiletMan1);
 layer.add(textF6A01);
 layer.add(textF6A02);	
 layer.add(textcloseroom);
 layer.add(textF6A03);
 layer.add(textF6A04);
 layer.add(textF6A05);
 layer.add(textF6A06);
 layer.add(textF6A07);
 layer.add(textF6A08);
 layer.add(textF6A09);
 layer.add(textF6A10);
 layer.add(textF6A11);
 layer.add(textF6A12);
 layer.add(textF6A13);
 layer.add(textf6Toilet);
 layer.add(textf6lift1);
 layer.add(textf6lift2);
 layer.add(textf6lift3);
 layer.add(textf6lift4);
 layer.add(F6doorfont);
 layer.add(F6doorExit);
//#endregion addชั้น6


 //#region addชั้น7
 layer.add(f7all);
 layer.add(f7out);
 layer.add(f7ToiletWoman1);
 layer.add(f7ToiletMan1);
 layer.add(f7lift1);
 layer.add(f7lift2);
 layer.add(f7lift3);
 layer.add(f7lift4);
 layer.add(F7A01);	
 layer.add(F7A02);	
 layer.add(F7A03);
 layer.add(F7A04);
 layer.add(F7A05);
 layer.add(F7A06);
 layer.add(F7A07);	
 layer.add(adminroom);
 layer.add(teacherRoom);
 layer.add(meetingRoom);
 layer.add(mirrorRoom);
 layer.add(f7Toilet);

 layer.add(textf7all);
 layer.add(textf7out);
 layer.add(textf7ToiletWoman1);
 layer.add(textf7ToiletMan1);
 layer.add(textF7A01);
 layer.add(textF7A02);	
 layer.add(textF7A03);
 layer.add(textF7A04);
 layer.add(textF7A05);
 layer.add(textF7A06);
 layer.add(textF7A07);
 layer.add(textAdminroom);
 layer.add(textTeacherRoom);
 layer.add(textMeetingRoom);
 layer.add(textMirrorRoom);
 layer.add(textf7Toilet);
 layer.add(textf7lift1);
 layer.add(textf7lift2);
 layer.add(textf7lift3);
 layer.add(textf7lift4);
 layer.add(F7doorfont);
 layer.add(F7doorExit);
//#endregion addชั้น7
  stage.add(layer);
//#endregion additemเข้าไปในlayerและaddlayerเข้าstage  

//#region getMap3  
function getMap3(){
	f3all.width(1000);
	f3all.height(650);
	f3all.x(0);
	f3all.y(150);
	textf3all.text("โถงทางเดินด้านในชั้น3");
	textf3all.x(400);
	textf3all.y(380);
	f3out.x(700);
	f3out.y(150);
	f3out.width(300);
	f3out.height(650);
	textf3out.text("โถงทางเดินด้านนอกชั้น3");
	textf3out.x(750);
	textf3out.y(380);
	f3ToiletWoman1.width(50);
	f3ToiletWoman1.height(50);
	f3ToiletWoman1.x(900);
	f3ToiletWoman1.y(150);
	textf3ToiletWoman1.text("ห้องน้ำหญิง");
	textf3ToiletWoman1.x(900);
	textf3ToiletWoman1.y(150);
	f3ToiletMan1.width(50);
	f3ToiletMan1.height(50);
	f3ToiletMan1.x(750);
	f3ToiletMan1.y(150);
	textf3ToiletMan1.text("ห้องน้ำชาย");
	textf3ToiletMan1.x(750);
	textf3ToiletMan1.y(150);
	f3lift1.width(50);
	f3lift1.height(50);
	f3lift1.x(700);
	f3lift1.y(450);
	textf3lift1.text("ลิฟท์");
	textf3lift1.x(700);
	textf3lift1.y(450);
	f3lift2.width(50);
	f3lift2.height(50);
	f3lift2.x(950);
	f3lift2.y(450);
	textf3lift2.text("ลิฟท์");
	textf3lift2.x(950);
	textf3lift2.y(450);
	f3lift3.width(50);
	f3lift3.height(50);
	f3lift3.x(950);
	f3lift3.y(600);
	textf3lift3.text("ลิฟท์");
	textf3lift3.x(950);
	textf3lift3.y(600);
	f3lift4.width(50);
	f3lift4.height(50);
	f3lift4.x(700);
	f3lift4.y(600);
	textf3lift4.text("ลิฟท์");
	textf3lift4.x(700);
	textf3lift4.y(600);
	F3A01.width(100);
	F3A01.height(100);
	F3A01.x(600);
	F3A01.y(150);
	textF3A01.text("3A01");
	textF3A01.x(600);
	textF3A01.y(150);
	F3A02.width(70);
	F3A02.height(200);
	F3A02.x(530);
	F3A02.y(150);
	textF3A02.text("3A02");
	textF3A02.x(530);
	textF3A02.y(150);
	F3A03.width(70);
	F3A03.height(200);
	F3A03.x(460);
	F3A03.y(150);
	textF3A03.text("3A03");
	textF3A03.x(460);
	textF3A03.y(150);
	F3A04.width(200);
	F3A04.height(70);
	F3A04.x(260);
	F3A04.y(150);
	textF3A04.text("3A04");
	textF3A04.x(260);
	textF3A04.y(150);
	F3A05.width(100);
	F3A05.height(70);
	F3A05.x(260);
	F3A05.y(220);
	textF3A05.text("3A05");
	textF3A05.x(260);
	textF3A05.y(220);
	F3A06.width(200);
	F3A06.height(70);
	F3A06.x(60);
	F3A06.y(150);
	textF3A06.text("3A06");
	textF3A06.x(60);
	textF3A06.y(150);
	F3A07.width(100);
	F3A07.height(70);
	F3A07.x(60);
	F3A07.y(220);
	textF3A07.text("3A07");
	textF3A07.x(60);
	textF3A07.y(220);
	F3A08.width(100);
	F3A08.height(100);
	F3A08.x(160);
	F3A08.y(500);
	textF3A08.text("3A08");
	textF3A08.x(160);
	textF3A08.y(500);
	F3A09.width(100);
	F3A09.height(100);
	F3A09.x(60);
	F3A09.y(400);
	textF3A09.text("3A09");
	textF3A09.x(60);
	textF3A09.y(400);
	F3A10.width(100);
	F3A10.height(100);
	F3A10.x(260);
	F3A10.y(400);
	textF3A10.text("3A10");
	textF3A10.x(260);
	textF3A10.y(400);
	F3A11.width(100);
	F3A11.height(100);
	F3A11.x(260);
	F3A11.y(500);
	textF3A11.text("3A11");
	textF3A11.x(260);
	textF3A11.y(500);
	F3A12.width(100);
	F3A12.height(100);
	F3A12.x(260);
	F3A12.y(600);
	textF3A12.text("3A12");
	textF3A12.x(260);
	textF3A12.y(600);
	F3A13.width(120);
	F3A13.height(250);
	F3A13.x(460);
	F3A13.y(450);
	textF3A13.text("3A13");
	textF3A13.x(460);
	textF3A13.y(450);
	f3Toilet.width(30);
	f3Toilet.height(100);
	f3Toilet.x(0);
	f3Toilet.y(300);
	textf3Toilet.text("ห้องน้ำพนักงาน");
	textf3Toilet.x(0);
	textf3Toilet.y(300);
	F3doorfont.x(700);
	F3doorfont.y(400);
	F3doorExit.x(10);
	F3doorExit.y(150);
	layer.draw();
		
  }
//#endregion getMap3  
//#region กำหนดhandleให้itemต่างๆในชั้น3  
  f3all.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 โถงทางเดินด้านใน');
  });
  f3all.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านในชั้น3'
  });
  f3out.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 โถงทางเดินด้านนอก');
  });
  f3out.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านนอกชั้น3'
  });
  f3ToiletWoman1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้องน้ำหญิงด้านนอก');
  });
  f3ToiletWoman1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำหญิงด้านนอกชั้น3'
  });
  f3ToiletMan1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้องน้ำชายด้านนอก');
  });
  f3ToiletMan1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำชายด้านนอกชั้น3'
  });
  f3lift1.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ลิฟท์');
  });
  f3lift2.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ลิฟท์');
  });
  f3lift3.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ลิฟท์');
  });
  f3lift4.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ลิฟท์');
  });
  F3A01.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A01');
  });
  F3A01.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A01';
  });
  F3A02.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A02');
  });
  F3A02.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A02';
  });
  F3A03.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A03');
  });
  F3A03.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A03';
  });
  F3A04.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A04');
  });
  F3A04.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A04';
  });
  F3A05.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A05');
  });
  F3A05.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A05';
  });
  F3A06.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A06');
  });
  F3A06.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A06';
  });
  F3A07.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A07');
  });
  F3A07.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A07';
  });
  F3A08.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A08');
  });
  F3A08.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A08';
  });
  F3A09.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A09');
  });
  F3A09.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A09';
  });
  F3A10.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A10');
  });
  F3A10.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A10';
  });
  F3A11.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A11');
  });
  F3A11.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A11';
  });
  F3A12.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A12');
  });
  F3A12.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A12';
  });
  F3A13.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้อง 3A13');
  });
  F3A13.on('mousedown touchstart', function () {
	window.location.href='/search?room=3A13';
  });
  f3Toilet.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 3 ห้องน้ำเจ้าหน้าที่');
  });
  f3Toilet.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำเจ้าหน้าที่ชั้น3';
	});
	F3doorfont.on('mousedown mouseover touchstart', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 3 ประตูหน้า');
		});
	F3doorExit.on('mousedown mouseover touchstart', function () {
			document.body.style.cursor = 'pointer';
			writeMessage('Floor 3 ประตูทางออก');
			});
  
//#endregion กำหนดhandleให้itemต่างๆในชั้น3  

//#region getMap4
function getMap4(){
	f4all.width(1000);
	f4all.height(650);
	f4all.x(0);
	f4all.y(150);
	textf4all.text("โถงทางเดินด้านในชั้น4");
	textf4all.x(400);
	textf4all.y(380);
	f4out.x(700);
	f4out.y(150);
	f4out.width(300);
	f4out.height(650);
	textf4out.text("โถงทางเดินด้านนอกชั้น4");
	textf4out.x(750);
	textf4out.y(380);
	f4ToiletWoman1.width(50);
	f4ToiletWoman1.height(50);
	f4ToiletWoman1.x(900);
	f4ToiletWoman1.y(150);
	textf4ToiletWoman1.text("ห้องน้ำหญิง");
	textf4ToiletWoman1.x(900);
	textf4ToiletWoman1.y(150);
	f4ToiletMan1.width(50);
	f4ToiletMan1.height(50);
	f4ToiletMan1.x(750);
	f4ToiletMan1.y(150);
	textf4ToiletMan1.text("ห้องน้ำชาย");
	textf4ToiletMan1.x(750);
	textf4ToiletMan1.y(150);
	f4lift1.width(50);
	f4lift1.height(50);
	f4lift1.x(700);
	f4lift1.y(450);
	textf4lift1.text("ลิฟท์");
	textf4lift1.x(700);
	textf4lift1.y(450);
	f4lift2.width(50);
	f4lift2.height(50);
	f4lift2.x(950);
	f4lift2.y(450);
	textf4lift2.text("ลิฟท์");
	textf4lift2.x(950);
	textf4lift2.y(450);
	f4lift3.width(50);
	f4lift3.height(50);
	f4lift3.x(950);
	f4lift3.y(600);
	textf4lift3.text("ลิฟท์");
	textf4lift3.x(950);
	textf4lift3.y(600);
	f4lift4.width(50);
	f4lift4.height(50);
	f4lift4.x(700);
	f4lift4.y(600);
	textf4lift4.text("ลิฟท์");
	textf4lift4.x(700);
	textf4lift4.y(600);
	staff.width(100);
	staff.height(100);
	staff.x(600);
	staff.y(150);
	textstaff.text("staff");
	textstaff.x(600);
	textstaff.y(150);
	F4A01.width(100);
	F4A01.height(100);
	F4A01.x(500);
	F4A01.y(150);
	textF4A01.text("4A01");
	textF4A01.x(500);
	textF4A01.y(150);
	F4A02.width(80);
	F4A02.height(100);
	F4A02.x(380);
	F4A02.y(150);
	textF4A02.text("4A02");
	textF4A02.x(380);
	textF4A02.y(150);
	F4A03.width(80);
	F4A03.height(100);
	F4A03.x(300);
	F4A03.y(150);
	textF4A03.text("4A03");
	textF4A03.x(300);
	textF4A03.y(150);
	F4A04.width(80);
	F4A04.height(100);
	F4A04.x(220);
	F4A04.y(150);
	textF4A04.text("4A04");
	textF4A04.x(220);
	textF4A04.y(150);
	F4A05.width(80);
	F4A05.height(100);
	F4A05.x(140);
	F4A05.y(150);
	textF4A05.text("4A05");
	textF4A05.x(140);
	textF4A05.y(150);
	F4A06.width(100);
	F4A06.height(200);
	F4A06.x(170);
	F4A06.y(500);
	textF4A06.text("4A06");
	textF4A06.x(170);
	textF4A06.y(500);
	F4A07.width(100);
	F4A07.height(200);
	F4A07.x(340);
	F4A07.y(500);
	textF4A07.text("4A07");
	textF4A07.x(340);
	textF4A07.y(500);
	F4A08.width(100);
	F4A08.height(200);
	F4A08.x(510);
	F4A08.y(500);
	textF4A08.text("4A08");
	textF4A08.x(510);
	textF4A08.y(500);
	f4Toilet.width(30);
	f4Toilet.height(100);
	f4Toilet.x(0);
	f4Toilet.y(300);
	textf4Toilet.text("ห้องน้ำพนักงาน");
	textf4Toilet.x(0);
	textf4Toilet.y(300);
	F4doorfont.x(700);
	F4doorfont.y(400);
	F4doorExit.x(10);
	F4doorExit.y(150);
	layer.draw();
		
}
//#endregion getMap4
//#region กำหนดhandleให้itemต่างๆในชั้น4
f4all.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 โถงทางเดินด้านใน');
  });
  f4all.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านในชั้น4'
  });
  f4out.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 โถงทางเดินด้านนอก');
  });
  f4out.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านนอกชั้น4'
  });
  f4ToiletWoman1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้องน้ำหญิงด้านนอก');
  });
  f4ToiletWoman1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำหญิงด้านนอกชั้น4'
  });
  f4ToiletMan1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้องน้ำชายด้านนอก');
  });
  f4ToiletMan1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำชายด้านนอกชั้น4'
  });
  f4lift1.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ลิฟท์');
  });
  f4lift2.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ลิฟท์');
  });
  f4lift3.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ลิฟท์');
  });
  f4lift4.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ลิฟท์');
  });
  staff.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง staff');
  });
  staff.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องstaffชั้น4';
  });

  F4A01.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง 3A04');
  });
  F4A01.on('mousedown touchstart', function () {
	window.location.href='/search?room=4A01';
  });
  F4A02.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง 4A02');
  });
  F4A02.on('mousedown touchstart', function () {
	window.location.href='/search?room=4A02';
  });
  F4A03.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง 4A03');
  });
  F4A03.on('mousedown touchstart', function () {
	window.location.href='/search?room=4A03';
  });
  F4A04.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง 4A04');
  });
  F4A04.on('mousedown touchstart', function () {
	window.location.href='/search?room=4A04';
  });
  F4A05.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง 4A05');
  });
  F4A05.on('mousedown touchstart', function () {
	window.location.href='/search?room=4A05';
  });
  F4A06.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง 4A06');
  });
  F4A06.on('mousedown touchstart', function () {
	window.location.href='/search?room=4A06';
  });
  F4A07.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง 4A07');
  });
  F4A07.on('mousedown touchstart', function () {
	window.location.href='/search?room=4A07';
  });
  F4A08.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้อง 4A08');
  });
  F4A08.on('mousedown touchstart', function () {
	window.location.href='/search?room=4A08';
  });
 
  
  f4Toilet.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 4 ห้องน้ำเจ้าหน้าที่');
  });
  f4Toilet.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำเจ้าหน้าที่ชั้น4';
	});
	F4doorfont.on('mousedown mouseover touchstart', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 4 ประตูหน้า');
		});
	F4doorExit.on('mousedown mouseover touchstart', function () {
			document.body.style.cursor = 'pointer';
			writeMessage('Floor 4 ประตูทางออก');
			});
//#endregion กำหนดhandleให้itemต่างๆในชั้น4  

//#region getMap5
function getMap5(){
	f5all.width(1000);
	f5all.height(650);
	f5all.x(0);
	f5all.y(150);
	textf5all.text("โถงทางเดินด้านในชั้น5");
	textf5all.x(400);
	textf5all.y(380);
	f5out.x(700);
	f5out.y(150);
	f5out.width(300);
	f5out.height(650);
	textf5out.text("โถงทางเดินด้านนอกชั้น5");
	textf5out.x(750);
	textf5out.y(380);
	f5ToiletWoman1.width(50);
	f5ToiletWoman1.height(50);
	f5ToiletWoman1.x(900);
	f5ToiletWoman1.y(150);
	textf5ToiletWoman1.text("ห้องน้ำหญิง");
	textf5ToiletWoman1.x(900);
	textf5ToiletWoman1.y(150);
	f5ToiletMan1.width(50);
	f5ToiletMan1.height(50);
	f5ToiletMan1.x(750);
	f5ToiletMan1.y(150);
	textf5ToiletMan1.text("ห้องน้ำชาย");
	textf5ToiletMan1.x(750);
	textf5ToiletMan1.y(150);
	f5lift1.width(50);
	f5lift1.height(50);
	f5lift1.x(700);
	f5lift1.y(450);
	textf5lift1.text("ลิฟท์");
	textf5lift1.x(700);
	textf5lift1.y(450);
	f5lift2.width(50);
	f5lift2.height(50);
	f5lift2.x(950);
	f5lift2.y(450);
	textf5lift2.text("ลิฟท์");
	textf5lift2.x(950);
	textf5lift2.y(450);
	f5lift3.width(50);
	f5lift3.height(50);
	f5lift3.x(950);
	f5lift3.y(600);
	textf5lift3.text("ลิฟท์");
	textf5lift3.x(950);
	textf5lift3.y(600);
	f5lift4.width(50);
	f5lift4.height(50);
	f5lift4.x(700);
	f5lift4.y(600);
	textf5lift4.text("ลิฟท์");
	textf5lift4.x(700);
	textf5lift4.y(600);
	F5A01.width(100);
	F5A01.height(100);
	F5A01.x(500);
	F5A01.y(150);
	textF5A01.text("5A01");
	textF5A01.x(500);
	textF5A01.y(150);
	testcenter.width(80);
	testcenter.height(150);
	testcenter.x(420);
	testcenter.y(150);
	texttestcenter.text("test center");
	texttestcenter.x(420);
	texttestcenter.y(150);

	F5A03.width(80);
	F5A03.height(150);
	F5A03.x(340);
	F5A03.y(150);
	textF5A03.text("5A03");
	textF5A03.x(340);
	textF5A03.y(150);
	F5A04.width(90);
	F5A04.height(70);
	F5A04.x(250);
	F5A04.y(150);
	textF5A04.text("5A04");
	textF5A04.x(250);
	textF5A04.y(150);
	F5A05.width(100);
	F5A05.height(70);
	F5A05.x(150);
	F5A05.y(150);
	textF5A05.text("5A05");
	textF5A05.x(150);
	textF5A05.y(150);
	F5A06.width(100);
	F5A06.height(70);
	F5A06.x(50);
	F5A06.y(150);
	textF5A06.text("5A06");
	textF5A06.x(50);
	textF5A06.y(150);

	F5A08.width(100);
	F5A08.height(200);
	F5A08.x(300);
	F5A08.y(500);
	textF5A08.text("5A08");
	textF5A08.x(300);
	textF5A08.y(500);
	F5A09.width(100);
	F5A09.height(200);
	F5A09.x(400);
	F5A09.y(500);
	textF5A09.text("5A09");
	textF5A09.x(400);
	textF5A09.y(500);
	F5A10.width(100);
	F5A10.height(200);
	F5A10.x(500);
	F5A10.y(500);
	textF5A10.text("5A10");
	textF5A10.x(510);
	textF5A10.y(500);
	f5Toilet.width(30);
	f5Toilet.height(100);
	f5Toilet.x(0);
	f5Toilet.y(300);
	textf5Toilet.text("ห้องน้ำพนักงาน");
	textf5Toilet.x(0);
	textf5Toilet.y(300);
	F5doorfont.x(700);
	F5doorfont.y(400);
	F5doorExit.x(10);
	F5doorExit.y(150);
	layer.draw();
		
}
//#endregion getMap5
//#region กำหนดhandleให้itemต่างๆในชั้น5
f5all.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 โถงทางเดินด้านใน');
  });
  f5all.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านในชั้น5'
  });
  f5out.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 โถงทางเดินด้านนอก');
  });
  f5out.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านนอกชั้น5'
  });
  f5ToiletWoman1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้องน้ำหญิงด้านนอก');
  });
  f5ToiletWoman1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำหญิงด้านนอกชั้น5'
  });
  f5ToiletMan1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้องน้ำชายด้านนอก');
  });
  f5ToiletMan1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำชายด้านนอกชั้น5'
  });
  f5lift1.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ลิฟท์');
  });
  f5lift2.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ลิฟท์');
  });
  f5lift3.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ลิฟท์');
  });
  f5lift4.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ลิฟท์');
  });
  F5A01.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง 5A01');
  });
  F5A01.on('mousedown touchstart', function () {
	window.location.href='/search?room=5A01';
  });
  testcenter.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง testcenter');
  });
  testcenter.on('mousedown touchstart', function () {
	window.location.href='/search?room=testcenter';
  });
  F5A03.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง 5A03');
  });
  F5A03.on('mousedown touchstart', function () {
	window.location.href='/search?room=5A03';
  });
  F5A04.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง 5A04');
  });
  F5A04.on('mousedown touchstart', function () {
	window.location.href='/search?room=5A04';
  });
  F5A05.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง 5A05');
  });
  F5A05.on('mousedown touchstart', function () {
	window.location.href='/search?room=5A05';
  });
  F5A06.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง 5A06');
  });
  F5A06.on('mousedown touchstart', function () {
	window.location.href='/search?room=5A06';
  });

  F5A08.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง 5A08');
  });
  F5A08.on('mousedown touchstart', function () {
	window.location.href='/search?room=5A08';
  });
  F5A09.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง 5A09');
  });
  F5A09.on('mousedown touchstart', function () {
	window.location.href='/search?room=5A09';
  });
  F5A10.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้อง 5A10');
  });
  F5A10.on('mousedown touchstart', function () {
	window.location.href='/search?room=5A10';
  });
  
  f5Toilet.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 5 ห้องน้ำเจ้าหน้าที่');
  });
  f5Toilet.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำเจ้าหน้าที่ชั้น5';
	});
	F5doorfont.on('mousedown mouseover touchstart', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 5 ประตูหน้า');
		});
	F5doorExit.on('mousedown mouseover touchstart', function () {
			document.body.style.cursor = 'pointer';
			writeMessage('Floor 5 ประตูทางออก');
			});
//#endregion กำหนดhandleให้itemต่างๆในชั้น5  



//#region getMap6
function getMap6(){
	f6all.width(1000);
	f6all.height(650);
	f6all.x(0);
	f6all.y(150);
	textf6all.text("โถงทางเดินด้านในชั้น6");
	textf6all.x(400);
	textf6all.y(380);
	f6out.x(700);
	f6out.y(150);
	f6out.width(300);
	f6out.height(650);
	textf6out.text("โถงทางเดินด้านนอกชั้น6");
	textf6out.x(750);
	textf6out.y(380);
	f6ToiletWoman1.width(50);
	f6ToiletWoman1.height(50);
	f6ToiletWoman1.x(920);
	f6ToiletWoman1.y(150);
	textf6ToiletWoman1.text("ห้องน้ำหญิง");
	textf6ToiletWoman1.x(920);
	textf6ToiletWoman1.y(150);
	f6ToiletMan1.width(50);
	f6ToiletMan1.height(50);
	f6ToiletMan1.x(850);
	f6ToiletMan1.y(150);
	textf6ToiletMan1.text("ห้องน้ำชาย");
	textf6ToiletMan1.x(850);
	textf6ToiletMan1.y(150);
	f6lift1.width(50);
	f6lift1.height(50);
	f6lift1.x(700);
	f6lift1.y(450);
	textf6lift1.text("ลิฟท์");
	textf6lift1.x(700);
	textf6lift1.y(450);
	f6lift2.width(50);
	f6lift2.height(50);
	f6lift2.x(950);
	f6lift2.y(450);
	textf6lift2.text("ลิฟท์");
	textf6lift2.x(950);
	textf6lift2.y(450);
	f6lift3.width(50);
	f6lift3.height(50);
	f6lift3.x(950);
	f6lift3.y(600);
	textf6lift3.text("ลิฟท์");
	textf6lift3.x(950);
	textf6lift3.y(600);
	f6lift4.width(50);
	f6lift4.height(50);
	f6lift4.x(700);
	f6lift4.y(600);
	textf6lift4.text("ลิฟท์");
	textf6lift4.x(700);
	textf6lift4.y(600);
	F6A01.width(100);
	F6A01.height(100);
	F6A01.x(600);
	F6A01.y(150);
	textF6A01.text("6A01");
	textF6A01.x(600);
	textF6A01.y(150);
	F6A02.width(80);
	F6A02.height(100);
	F6A02.x(520);
	F6A02.y(150);
	textF6A02.text("6A02");
	textF6A02.x(520);
	textF6A02.y(150);
	closeroom.width(100);
	closeroom.height(50);
	closeroom.x(720);
	closeroom.y(150);
	textcloseroom.text("ห้องปิด");
	textcloseroom.x(720);
	textcloseroom.y(150);
	F6A03.width(80);
	F6A03.height(150);
	F6A03.x(440);
	F6A03.y(150);
	textF6A03.text("6A03");
	textF6A03.x(440);
	textF6A03.y(150);
	F6A04.width(80);
	F6A04.height(150);
	F6A04.x(360);
	F6A04.y(150);
	textF6A04.text("6A04");
	textF6A04.x(360);
	textF6A04.y(150);
	F6A05.width(70);
	F6A05.height(80);
	F6A05.x(290);
	F6A05.y(150);
	textF6A05.text("6A05");
	textF6A05.x(290);
	textF6A05.y(150);
	F6A06.width(80);
	F6A06.height(100);
	F6A06.x(210);
	F6A06.y(150);
	textF6A06.text("6A06");
	textF6A06.x(210);
	textF6A06.y(150);
	F6A07.width(80);
	F6A07.height(50);
	F6A07.x(210);
	F6A07.y(250);
	textF6A07.text("6A07");
	textF6A07.x(210);
	textF6A07.y(250);
	F6A08.width(80);
	F6A08.height(200);
	F6A08.x(150);
	F6A08.y(500);
	textF6A08.text("6A08");
	textF6A08.x(150);
	textF6A08.y(500);
	F6A09.width(80);
	F6A09.height(100);
	F6A09.x(230);
	F6A09.y(500);
	textF6A09.text("6A09");
	textF6A09.x(230);
	textF6A09.y(500);
	F6A10.width(80);
	F6A10.height(100);
	F6A10.x(230);
	F6A10.y(600);
	textF6A10.text("6A10");
	textF6A10.x(230);
	textF6A10.y(600);
	F6A11.width(80);
	F6A11.height(100);
	F6A11.x(400);
	F6A11.y(600);
	textF6A11.text("6A11");
	textF6A11.x(400);
	textF6A11.y(600);
	F6A12.width(80);
	F6A12.height(100);
	F6A12.x(400);
	F6A12.y(500);
	textF6A12.text("6A12");
	textF6A12.x(400);
	textF6A12.y(500);
	F6A13.width(80);
	F6A13.height(200);
	F6A13.x(480);
	F6A13.y(500);
	textF6A13.text("6A13");
	textF6A13.x(480);
	textF6A13.y(500);
	f6Toilet.width(30);
	f6Toilet.height(100);
	f6Toilet.x(0);
	f6Toilet.y(300);
	textf6Toilet.text("ห้องน้ำพนักงาน");
	textf6Toilet.x(0);
	textf6Toilet.y(300);
	F6doorfont.x(700);
	F6doorfont.y(400);
	F6doorExit.x(10);
	F6doorExit.y(150);
	layer.draw();
		
}
//#endregion getMap6

//#region กำหนดhandleให้itemต่างๆในชั้น6
f6all.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 โถงทางเดินด้านใน');
  });
  f6all.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านในชั้น6'
  });
  f6out.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 โถงทางเดินด้านนอก');
  });
  f6out.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านนอกชั้น6'
  });
  f6ToiletWoman1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้องน้ำหญิงด้านนอก');
  });
  f6ToiletWoman1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำหญิงด้านนอกชั้น6'
  });
  f6ToiletMan1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้องน้ำชายด้านนอก');
  });
  f6ToiletMan1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำชายด้านนอกชั้น6'
  });
  f6lift1.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ลิฟท์');
  });
  f6lift2.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ลิฟท์');
  });
  f6lift3.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ลิฟท์');
  });
  f6lift4.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ลิฟท์');
  });
  F6A01.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง 6A01');
  });
  F6A01.on('mousedown touchstart', function () {
	window.location.href='/search?room=6A01';
	});
	F6A02.on('mouseover', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 6 ห้อง 6A02');
		});
		F6A02.on('mousedown touchstart', function () {
		window.location.href='/search?room=6A02';
		});
  closeroom.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง closeroom');
  });
  closeroom.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องปิด';
  });
  F6A03.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง 6A03');
  });
  F6A03.on('mousedown touchstart', function () {
	window.location.href='/search?room=6A03';
  });
  F6A04.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง 6A04');
  });
  F6A04.on('mousedown touchstart', function () {
	window.location.href='/search?room=6A04';
  });
  F6A05.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง 6A05');
  });
  F6A05.on('mousedown touchstart', function () {
	window.location.href='/search?room=6A05';
  });
  F6A06.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง 6A06');
  });
  F6A06.on('mousedown touchstart', function () {
	window.location.href='/search?room=6A06';
	});
	F6A07.on('mouseover', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 6 ห้อง 6A07');
		});
		F6A07.on('mousedown touchstart', function () {
		window.location.href='/search?room=6A07';
		});

  F6A08.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง 6A08');
  });
  F6A08.on('mousedown touchstart', function () {
	window.location.href='/search?room=6A08';
  });
  F6A09.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง 6A09');
  });
  F6A09.on('mousedown touchstart', function () {
	window.location.href='/search?room=6A09';
  });
  F6A10.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้อง 6A10');
  });
  F6A10.on('mousedown touchstart', function () {
	window.location.href='/search?room=6A10';
  });
	F6A11.on('mouseover', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 6 ห้อง 6A11');
		});
		F6A11.on('mousedown touchstart', function () {
		window.location.href='/search?room=6A11';
		});
		F6A12.on('mouseover', function () {
			document.body.style.cursor = 'pointer';
			writeMessage('Floor 6 ห้อง 6A12');
			});
			F6A12.on('mousedown touchstart', function () {
			window.location.href='/search?room=6A12';
			});
			F6A13.on('mouseover', function () {
				document.body.style.cursor = 'pointer';
				writeMessage('Floor 6 ห้อง 6A13');
				});
				F6A13.on('mousedown touchstart', function () {
				window.location.href='/search?room=6A13';
				});
  f6Toilet.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 6 ห้องน้ำเจ้าหน้าที่');
  });
  f6Toilet.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำเจ้าหน้าที่ชั้น6';
	});
	F6doorfont.on('mousedown mouseover touchstart', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 6 ประตูหน้า');
		});
	F6doorExit.on('mousedown mouseover touchstart', function () {
			document.body.style.cursor = 'pointer';
			writeMessage('Floor 6 ประตูทางออก');
			});
//#endregion กำหนดhandleให้itemต่างๆในชั้น6  


//#region getMap7
function getMap7(){
	f7all.width(1000);
	f7all.height(650);
	f7all.x(0);
	f7all.y(150);
	textf7all.text("โถงทางเดินด้านในชั้น7");
	textf7all.x(400);
	textf7all.y(380);
	f7out.x(700);
	f7out.y(150);
	f7out.width(300);
	f7out.height(650);
	textf7out.text("โถงทางเดินด้านนอกชั้น7");
	textf7out.x(750);
	textf7out.y(380);
	f7ToiletWoman1.width(50);
	f7ToiletWoman1.height(50);
	f7ToiletWoman1.x(900);
	f7ToiletWoman1.y(150);
	textf7ToiletWoman1.text("ห้องน้ำหญิง");
	textf7ToiletWoman1.x(900);
	textf7ToiletWoman1.y(150);
	f7ToiletMan1.width(50);
	f7ToiletMan1.height(50);
	f7ToiletMan1.x(750);
	f7ToiletMan1.y(150);
	textf7ToiletMan1.text("ห้องน้ำชาย");
	textf7ToiletMan1.x(750);
	textf7ToiletMan1.y(150);
	f7lift1.width(50);
	f7lift1.height(50);
	f7lift1.x(700);
	f7lift1.y(450);
	textf7lift1.text("ลิฟท์");
	textf7lift1.x(700);
	textf7lift1.y(450);
	f7lift2.width(50);
	f7lift2.height(50);
	f7lift2.x(950);
	f7lift2.y(450);
	textf7lift2.text("ลิฟท์");
	textf7lift2.x(950);
	textf7lift2.y(450);
	f7lift3.width(50);
	f7lift3.height(50);
	f7lift3.x(950);
	f7lift3.y(600);
	textf7lift3.text("ลิฟท์");
	textf7lift3.x(950);
	textf7lift3.y(600);
	f7lift4.width(50);
	f7lift4.height(50);
	f7lift4.x(700);
	f7lift4.y(600);
	textf7lift4.text("ลิฟท์");
	textf7lift4.x(700);
	textf7lift4.y(600);
	F7A01.width(80);
	F7A01.height(80);
	F7A01.x(540);
	F7A01.y(150);
	textF7A01.text("7A01");
	textF7A01.x(540);
	textF7A01.y(150);
	F7A02.width(80);
	F7A02.height(120);
	F7A02.x(460);
	F7A02.y(150);
	textF7A02.text("7A02");
	textF7A02.x(460);
	textF7A02.y(150);
	F7A03.width(80);
	F7A03.height(120);
	F7A03.x(380);
	F7A03.y(150);
	textF7A03.text("7A03");
	textF7A03.x(380);
	textF7A03.y(150);
	F7A04.width(80);
	F7A04.height(120);
	F7A04.x(300);
	F7A04.y(150);
	textF7A04.text("7A04");
	textF7A04.x(300);
	textF7A04.y(150);
	F7A05.width(80);
	F7A05.height(120);
	F7A05.x(220);
	F7A05.y(150);
	textF7A05.text("7A05");
	textF7A05.x(220);
	textF7A05.y(150);
	F7A06.width(80);
	F7A06.height(120);
	F7A06.x(140);
	F7A06.y(150);
	textF7A06.text("7A06");
	textF7A06.x(140);
	textF7A06.y(150);
	F7A07.width(150);
	F7A07.height(200);
	F7A07.x(200);
	F7A07.y(500);
	textF7A07.text("7A07");
	textF7A07.x(200);
	textF7A07.y(500);
	adminroom.width(80);
	adminroom.height(80);
	adminroom.x(620);
	adminroom.y(150);
	textAdminroom.text("ห้องadmin");
	textAdminroom.x(620);
	textAdminroom.y(150);
	teacherRoom.width(100);
	teacherRoom.height(200);
	teacherRoom.x(430);
	teacherRoom.y(500);
	textTeacherRoom.text("ห้องอาจารย์");
	textTeacherRoom.x(430);
	textTeacherRoom.y(500);
	meetingRoom.width(80);
	meetingRoom.height(200);
	meetingRoom.x(350);
	meetingRoom.y(500);
	textMeetingRoom.text("ห้องประชุม");
	textMeetingRoom.x(350);
	textMeetingRoom.y(500);
	mirrorRoom.width(100);
	mirrorRoom.height(200);
	mirrorRoom.x(100);
	mirrorRoom.y(500);
	textMirrorRoom.text("ห้องกระจก");
	textMirrorRoom.x(100);
	textMirrorRoom.y(500);
	f7Toilet.width(30);
	f7Toilet.height(100);
	f7Toilet.x(0);
	f7Toilet.y(300);
	textf7Toilet.text("ห้องน้ำพนักงาน");
	textf7Toilet.x(0);
	textf7Toilet.y(300);
	F7doorfont.x(700);
	F7doorfont.y(400);
	F7doorExit.x(10);
	F7doorExit.y(150);
	layer.draw();
		
}
//#endregion getMap7

//#region กำหนดhandleให้itemต่างๆในชั้น6
f7all.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 โถงทางเดินด้านใน');
  });
  f7all.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านในชั้น7'
  });
  f7out.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 โถงทางเดินด้านนอก');
  });
  f7out.on('mousedown touchstart', function () {
	window.location.href='/search?room=โถงทางเดินด้านนอกชั้น7'
  });
  f7ToiletWoman1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้องน้ำหญิงด้านนอก');
  });
  f7ToiletWoman1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำหญิงด้านนอกชั้น7'
  });
  f7ToiletMan1.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้องน้ำชายด้านนอก');
  });
  f7ToiletMan1.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำชายด้านนอกชั้น7'
  });
  f7lift1.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ลิฟท์');
  });
  f7lift2.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ลิฟท์');
  });
  f7lift3.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ลิฟท์');
  });
  f7lift4.on('mousedown mouseover touchstart', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ลิฟท์');
  });
  F7A01.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้อง 7A01');
  });
  F7A01.on('mousedown touchstart', function () {
	window.location.href='/search?room=7A01';
	});
	F7A02.on('mouseover', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 7 ห้อง 7A02');
		});
		F7A02.on('mousedown touchstart', function () {
		window.location.href='/search?room=7A02';
		});
  F7A03.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้อง 7A03');
  });
  F7A03.on('mousedown touchstart', function () {
	window.location.href='/search?room=7A03';
  });
  F7A04.on(' mouseover ', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้อง 7A04');
  });
  F7A04.on('mousedown touchstart', function () {
	window.location.href='/search?room=7A04';
  });
  F7A05.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้อง 7A05');
  });
  F7A05.on('mousedown touchstart', function () {
	window.location.href='/search?room=7A05';
  });
  F7A06.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้อง 7A06');
  });
  F7A06.on('mousedown touchstart', function () {
	window.location.href='/search?room=7A06';
	});
	F7A07.on('mouseover', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 7 ห้อง 7A07');
		});
		F7A07.on('mousedown touchstart', function () {
		window.location.href='/search?room=7A07';
		});

  adminroom.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้อง admin');
  });
  adminroom.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องadminชั้น7';
  });
  teacherRoom.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้องอาจารย์');
  });
  teacherRoom.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องอาจารย์ชั้น7';
  });
  meetingRoom.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้องประชุม');
  });
  meetingRoom.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องประชุมชั้น7';
  });
	mirrorRoom.on('mouseover', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 7 ห้องกระจก');
		});
		mirrorRoom.on('mousedown touchstart', function () {
		window.location.href='/search?room=ห้องกระจกชั้น7';
		});
		
  f7Toilet.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
	writeMessage('Floor 7 ห้องน้ำเจ้าหน้าที่');
  });
  f7Toilet.on('mousedown touchstart', function () {
	window.location.href='/search?room=ห้องน้ำเจ้าหน้าที่ชั้น7';
	});
	F7doorfont.on('mousedown mouseover touchstart', function () {
		document.body.style.cursor = 'pointer';
		writeMessage('Floor 7 ประตูหน้า');
		});
	F7doorExit.on('mousedown mouseover touchstart', function () {
			document.body.style.cursor = 'pointer';
			writeMessage('Floor 7 ประตูทางออก');
			});
//#endregion กำหนดhandleให้itemต่างๆในชั้น6  



//#region ทำresponsive
function fitStageIntoParentContainer() {
	var container = document.querySelector('#stage-parent');

	// now we need to fit stage into parent
	var containerWidth = container.offsetWidth;
	// to do this we need to scale the stage
	var scale = containerWidth / stageWidth;


	stage.width(stageWidth * scale);
	stage.height(stageHeight * scale);
	stage.scale({ x: scale, y: scale });
	stage.draw();
}
fitStageIntoParentContainer();

// adapt the stage on any window resize
window.addEventListener('resize', fitStageIntoParentContainer)
//#endregion ทำresponsive

