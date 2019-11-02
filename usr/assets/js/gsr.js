var data_county = {
    'keelung_city':'基隆市',
    'taipei_city':'臺北市',
    'xinbei_city':'新北市',
    'taoyuan_city':'桃園市',
    'hsinchu_city':'新竹市',
    'hsinchu_county':'新竹縣',
    'miaoli_county':'苗栗縣',
    'taichung_city':'臺中市',
    'changhua_county':'彰化縣',
    'nantou_county':'南投縣',
    'yunlin_county':'雲林縣',
    'chiayi_city':'嘉義市',
    'chiayi_county':'嘉義縣',
    'tainan_city':'臺南市',
    'kaohsiung_city':'高雄市',
    'pingtung_county':'屏東縣',
    'yilan_county':'宜蘭縣',
    'hualien_county':'花蓮縣',
    'taitung_county':'臺東縣',
    'kinmen_county':'金門縣',
    //'penghu_county':'澎湖縣'
};

var data_district = {
    'keelung_city': {
            '仁愛區': '200', '信義區': '201', '中正區': '202', '中山區': '203', '安樂區': '204', '暖暖區': '205',
            '七堵區': '206'
    },
    'taipei_city': {
            '中正區': '100', '大同區': '103', '中山區': '104', '松山區': '105', '大安區': '106', '萬華區': '108',
            '信義區': '110', '士林區': '111', '北投區': '112', '內湖區': '114', '南港區': '115', '文山區': '116'
    },
    'xinbei_city': {
            '萬里區': '207', '金山區': '208', '板橋區': '220', '汐止區': '221', '深坑區': '222', '石碇區': '223',
            '瑞芳區': '224', '平溪區': '226', '雙溪區': '227', '貢寮區': '228', '新店區': '231', '坪林區': '232',
            '烏來區': '233', '永和區': '234', '中和區': '235', '土城區': '236', '三峽區': '237', '樹林區': '238',
            '鶯歌區': '239', '三重區': '241', '新莊區': '242', '泰山區': '243', '林口區': '244', '蘆洲區': '247',
            '五股區': '248', '八里區': '249', '淡水區': '251', '三芝區': '252', '石門區': '253'
    },
    'taoyuan_city': {
            '中壢區': '320', '平鎮區': '324', '龍潭區': '325', '楊梅區': '326', '新屋區': '327', '觀音區': '328',
            '桃園區': '330', '龜山區': '333', '八德區': '334', '大溪區': '335', '復興區': '336', '大園區': '337',
            '蘆竹區': '338'
    },
    'hsinchu_city': {'東區': '300', '北區': '300', '香山區': '300'},
    'hsinchu_county': {
            '竹北市': '302', '湖口鄉': '303', '新豐鄉': '304', '新埔鎮': '305', '關西鎮': '306', '芎林鄉': '307',
            '寶山鄉': '308', '竹東鎮': '310', '五峰鄉': '311', '橫山鄉': '312', '尖石鄉': '313', '北埔鄉': '314',
            '峨眉鄉': '315'
        },
    'miaoli_county': {
            '竹南鎮': '350', '頭份市': '351', '三灣鄉': '352', '南庄鄉': '353', '獅潭鄉': '354', '後龍鎮': '356',
            '通霄鎮': '357', '苑裡鎮': '358', '苗栗市': '360', '造橋鄉': '361', '頭屋鄉': '362', '公館鄉': '363',
            '大湖鄉': '364', '泰安鄉': '365', '銅鑼鄉': '366', '三義鄉': '367', '西湖鄉': '368', '卓蘭鎮': '369'
        },
    'taichung_city': {
            '中區': '400', '東區': '401', '南區': '402', '西區': '403', '北區': '404', '北屯區': '406', '西屯區': '407', '南屯區': '408',
            '太平區': '411', '大里區': '412', '霧峰區': '413', '烏日區': '414', '豐原區': '420', '后里區': '421',
            '石岡區': '422', '東勢區': '423', '和平區': '424', '新社區': '426', '潭子區': '427', '大雅區': '428',
            '神岡區': '429', '大肚區': '432', '沙鹿區': '433', '龍井區': '434', '梧棲區': '435', '清水區': '436',
            '大甲區': '437', '外埔區': '438', '大安區': '439'
        },
    'changhua_county': {
            '彰化市': '500', '芬園鄉': '502', '花壇鄉': '503', '秀水鄉': '504', '鹿港鎮': '505', '福興鄉': '506',
            '線西鄉': '507', '和美鎮': '508', '伸港鄉': '509', '員林市': '510', '社頭鄉': '511', '永靖鄉': '512',
            '埔心鄉': '513', '溪湖鎮': '514', '大村鄉': '515', '埔鹽鄉': '516', '田中鎮': '520', '北斗鎮': '521',
            '田尾鄉': '522', '埤頭鄉': '523', '溪州鄉': '524', '竹塘鄉': '525', '二林鎮': '526', '大城鄉': '527',
            '芳苑鄉': '528', '二水鄉': '530'
    },
    'nantou_county': {
            '南投市': '540', '中寮鄉': '541', '草屯鎮': '542', '國姓鄉': '544', '埔里鎮': '545', '仁愛鄉': '546',
            '名間鄉': '551', '集集鎮': '552', '水里鄉': '553', '魚池鄉': '555', '信義鄉': '556', '竹山鎮': '557',
            '鹿谷鄉': '558'
    },
    'yunlin_county': {
            '斗南鎮': '630', '大埤鄉': '631', '虎尾鎮': '632', '土庫鎮': '633', '褒忠鄉': '634', '東勢鄉': '635',
            '臺西鄉': '636', '崙背鄉': '637', '麥寮鄉': '638', '斗六市': '640', '林內鄉': '643', '古坑鄉': '646',
            '莿桐鄉': '647', '西螺鎮': '648', '二崙鄉': '649', '北港鎮': '651', '水林鄉': '652', '口湖鄉': '653',
            '四湖鄉': '654', '元長鄉': '655'
    },
    'chiayi_city': {'東區': '600', '西區': '600'},
    'chiayi_county': {
            '番路鄉': '602', '梅山鄉': '603', '竹崎鄉': '604', '阿里山鄉': '605', '中埔鄉': '606', '大埔鄉': '607',
            '水上鄉': '608', '鹿草鄉': '611', '太保市': '612', '朴子市': '613', '東石鄉': '614', '六腳鄉': '615',
            '新港鄉': '616', '民雄鄉': '621', '大林鎮': '622', '溪口鄉': '623', '義竹鄉': '624', '布袋鎮': '625'
    },
    'tainan_city': {
            '中西區': '700', '東區': '701', '南區': '702', '北區': '704', '安平區': '708', '安南區': '709',
            '永康區': '710', '歸仁區': '711', '新化區': '712', '左鎮區': '713', '玉井區': '714', '楠西區': '715',
            '南化區': '716', '仁德區': '717', '關廟區': '718', '龍崎區': '719', '官田區': '720', '麻豆區': '721',
            '佳里區': '722', '西港區': '723', '七股區': '724', '將軍區': '725', '學甲區': '726', '北門區': '727',
            '新營區': '730', '後壁區': '731', '白河區': '732', '東山區': '733', '六甲區': '734', '下營區': '735',
            '柳營區': '736', '鹽水區': '737', '善化區': '741', '大內區': '742', '山上區': '743', '新市區': '744',
            '安定區': '745'
    },
    'kaohsiung_city': {
        '新興區': '800', '前金區': '801', '苓雅區': '802', '鹽埕區': '803', '鼓山區': '804', '旗津區': '805',
        '前鎮區': '806', '三民區': '807', '楠梓區': '811', '小港區': '812', '左營區': '813',
        '仁武區': '814', '大社區': '815', /*'東沙群島': '817', '南沙群島': '819',*/ '岡山區': '820', '路竹區': '821',
        '阿蓮區': '822', '田寮區': '823',
        '燕巢區': '824', '橋頭區': '825', '梓官區': '826', '彌陀區': '827', '永安區': '828', '湖內區': '829',
        '鳳山區': '830', '大寮區': '831', '林園區': '832', '鳥松區': '833', '大樹區': '840', '旗山區': '842',
        '美濃區': '843', '六龜區': '844', '內門區': '845', '杉林區': '846', '甲仙區': '847', '桃源區': '848',
        '那瑪夏區': '849', '茂林區': '851', '茄萣區': '852'
    },
    'pingtung_county': {
        '屏東市': '900', '三地門鄉': '901', '霧臺鄉': '902', '瑪家鄉': '903', '九如鄉': '904', '里港鄉': '905',
        '高樹鄉': '906', '鹽埔鄉': '907', '長治鄉': '908', '麟洛鄉': '909', '竹田鄉': '911', '內埔鄉': '912',
        '萬丹鄉': '913', '潮州鎮': '920', '泰武鄉': '921', '來義鄉': '922', '萬巒鄉': '923', '崁頂鄉': '924',
        '新埤鄉': '925', '南州鄉': '926', '林邊鄉': '927', '東港鎮': '928', '琉球鄉': '929', '佳冬鄉': '931',
        '新園鄉': '932', '枋寮鄉': '940', '枋山鄉': '941', '春日鄉': '942', '獅子鄉': '943', '車城鄉': '944',
        '牡丹鄉': '945', '恆春鎮': '946', '滿州鄉': '947'
    },
    'yilan_county': {
            '宜蘭市': '260', '頭城鎮': '261', '礁溪鄉': '262', '壯圍鄉': '263', '員山鄉': '264', '羅東鎮': '265',
            '三星鄉': '266', '大同鄉': '267', '五結鄉': '268', '冬山鄉': '269', '蘇澳鎮': '270', '南澳鄉': '272',
            /*'釣魚臺列嶼': '290'*/
    },
    'hualien_county': {
        '花蓮市': '970', '新城鄉': '971', '秀林鄉': '972', '吉安鄉': '973', '壽豐鄉': '974', '鳳林鎮': '975',
        '光復鄉': '976', '豐濱鄉': '977', '瑞穗鄉': '978', '萬榮鄉': '979', '玉里鎮': '981', '卓溪鄉': '982',
        '富里鄉': '983'
    },
    'taitung_county': {
        '臺東市': '950', /*'綠島鄉': '951', '蘭嶼鄉': '952',*/ '延平鄉': '953', '卑南鄉': '954', '鹿野鄉': '955',
        '關山鎮': '956', '海端鄉': '957', '池上鄉': '958', '東河鄉': '959', '成功鎮': '961', '長濱鄉': '962',
        '太麻里鄉': '963', '金峰鄉': '964', '大武鄉': '965', '達仁鄉': '966'
    },
    'kinmen_county': {'金沙鎮': '890', '金湖鎮': '891', '金寧鄉': '892', '金城鎮': '893', '烈嶼鄉': '894', /*'烏坵鄉': '896'*/},
    'penghu_county': {'馬公市': '880', '西嶼鄉': '881', '望安鄉': '882', '七美鄉': '883', '白沙鄉': '884', '湖西鄉': '885'}
};

var icon_list = [
    'assets/img/gsr/icon/01.png', 'assets/img/gsr/icon/02.png', 'assets/img/gsr/icon/03.png', 'assets/img/gsr/icon/04.png',
    'assets/img/gsr/icon/05.png', 'assets/img/gsr/icon/06.png', 'assets/img/gsr/icon/07.png', 'assets/img/gsr/icon/08.png',
    'assets/img/gsr/icon/09.png', 'assets/img/gsr/icon/10.png', 'assets/img/gsr/icon/11.png', 'assets/img/gsr/icon/12.png',
    'assets/img/gsr/icon/13.png', 'assets/img/gsr/icon/14.png'
]

//preloadImages(icon_list);
/*----------------------------------------------
* Replace all SVG images with inline SVG
* 1. all path bind click
*----------------------------------------------*/
function replaceSvg(type=''){
    console.log('do replaceSvg()...'+type);

    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id'),
            imgClass = $img.attr('class'),
            imgURL = $img.attr('src'),
            imgName = $img.attr('name');

        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');

            $svg = $svg.attr('name', imgName);

            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);

            }
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass);
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml')

        .done(function() {

            if(type!=''){
                selDistrict(type);
            }

            // bind click to every path
            if($('#map_taiwan path').length){
                $('#map_taiwan path').click(function(e){
                    selCounty( $(this).attr('id') );
                }).on('mouseenter',function(){
                    manIcon($(this).attr('id'));
                }).on('mouseleave',function(){
                    manIcon();
                });
            }

            if($('#map_county').length){
                $('#map_county path').click(function(e){
                    $("#district-list li[id="+$(this).attr('name')+"] input").trigger('click');
                }).each(function(){
                    numsIcon($(this),3);
                });
            }

        });
    });

}

/*-------------------------------------------------
* text list district
*------------------------------------------------*/
function selCounty(district){
    if(data_district[district])
    {
        // district list
        $('#district-list').html('');
        var items = [], i=0 , data = data_district[district];
        $.each( data, function( key, val ) {
            i++;
            //if(key.length==2) key = key+"-";
            items.push( "<li id='" + key + "' class='checkbox-inline'><input class='magic-radio' type='radio' name='dist' id='district-radio-"+i+"' value='"+key+"'><label for='district-radio-"+i+"'>" + key + "</label></li>" );
        });

        $("<ul/>", {
            'data-id': district,
            html: items.join( "" )
        })
        .appendTo("#district-list")

        // radio district click
        .on('click','input',function(e){
            selDistrict($(this).val());
        });

        $('#select-county li').removeClass('active');
        $('#select-county li[data-id='+district+']').addClass('active');
        $('#select-county > input').val($('#select-county li.active').text());

        //show district svg
        $('#map svg').remove();
        $('#icon_man').hide();
        $('.icon_num').remove();
        $('#dis_name').hide();
        $('#map').append("<img id='map_county' name='"+district+"' class='svg' src='assets/img/gsr/"+district+".svg'>");
        replaceSvg();

    };
}

/*-------------------------------------------------
* click one district
*------------------------------------------------*/
function selDistrict(district_name){
    if(district_name){

        $('#map_county path').removeClass('active');
        var ta = $('#map_county').find('path[name='+district_name+']').addClass('active');

        $('svg.icon_num').removeClass('active');
        $('svg.icon_num[name='+district_name+']').addClass('active');

        // show District name box
        $('#dis_name').text(district_name).show();
        var pos = relPos(ta);
        var pathWH = getPathWH(ta);
        $('#dis_name').css('transform','translate('+ (pos.x + pathWH.w/2 - $('#dis_name').width()/2 ) +'px, '+ (pos.y + pathWH.h/2 + 10 ) +'px)');
    }
}

/*-------------------------------------------------
* show icon on taiwan map
*------------------------------------------------*/
function manIcon(id){
    $('#map_taiwan .county').removeClass('active');
    $('#icon_man').removeClass('animated').hide().stop(true,true);
    $('#dis_name').hide();

    if(id){
        var nums = Math.floor( Math.random() * icon_list.length);
        $('#'+id).addClass('active');
        $('#dis_name').text(data_county[id]);
        //console.log(id+'....'+nums+','+icon_list[nums]);
        $('#icon_man').attr('src',icon_list[nums]).one('load',function(){
            //console.log('icon load...'+nums+'.'+data_county[id]);
            var w = $('#map_taiwan').outerWidth(),
                h = $('#map_taiwan').outerHeight(),
                x = $('#'+id).data('x') * (w / 720),
                y = $('#'+id).data('y') * (h / 773),
                iconW = $('#icon_man').width(),
                iconH = $('#icon_man').height(),
                nmW = $('#dis_name').width(),
                nmH = $('#dis_name').height();

            $('#icon_man').attr('data-wh',iconW+','+iconH).css({
                'top': (iconH * -1 + y )  + 'px',
                'left': (iconW / -2 + x) + 'px',
//                'transform':'translate('+x+'px,'+y+'px)'
            }).show().addClass('animated');
            $('#dis_name').css('transform','translate('+ (x-nmW/2) +'px,'+ (y-iconH-nmH - 15) +'px)').show();
        });
    }
}

/*-------------------------------------------------
* show number marker icon 31x39px
*------------------------------------------------*/
function numsIcon($e,nums=0){

    nums = Math.floor( Math.random() * 3);  // test: random number
    if(nums==0) return;

    var eW = $e[0].getBoundingClientRect().width,
        eH = $e[0].getBoundingClientRect().height;

    var top = $e.offset().top - $e.parent().offset().top - $e.parent().scrollTop();
    var left = $e.offset().left - $e.parent().offset().left;
    var x = left + eW/2 - 31/2;
    var y = top + eH/2 - 39/2;

    $e.attr('data-x',Math.round(left)).attr('data-y',Math.round(top));

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg = setAttr(svg,{'xlink':'http://www.w3.org/1999/xlink', 'width':'31', 'height':'39', 'class':'icon_num', 'name':$e.attr('name'),'style':'transform:translate('+x+'px, '+y+'px)'})

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path = setAttr(path,{'fill':'#ffffff', 'stroke':'#000000', 'd':'M3.001,15.397a10.581,10.581,0,0,0,1.75,6.45l10.75,14.15,10.75-14.15a10.587,10.587,0,0,0,1.75-6.45,11.889,11.889,0,0,0-3.65-8.8,12.678,12.678,0,0,0-17.7,0A11.886,11.886,0,0,0,3.001,15.397Z'})

    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text = setAttr(text,{'x':'15','y':'22','text-anchor':'middle' });
    text.textContent = nums;

    svg.appendChild(path);
    svg.appendChild(text);

    $(svg).appendTo($('#map'));
}


function setAttr(el,attrs){
    for (var k in attrs)
        el.setAttribute(k, attrs[k]);
    return el;
}

function relPos(el){
    var pos = [];
    pos.x = el.offset().left - el.parent().offset().left;
    pos.y = el.offset().top - el.parent().offset().top - el.parent().scrollTop();
    return pos;
}

function getPathWH(el){
    var n = [];
    n.w = el[0].getBoundingClientRect().width,
    n.h = el[0].getBoundingClientRect().height;
    return n;
}

function getCounty(object, value) {
    console.log('value = ' + value);
    return Object.keys(object).find(key => object[key] === value);
}

function preloadImages(srcs) {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    var img;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.src = srcs[i];
        preloadImages.cache.push(img);
    }
}

/*-------------------------------------------------
* window onready
*------------------------------------------------*/
$(function(){

    //show taiwan.svg
    replaceSvg();


    // list all county
    $.each( data_county, function( key, val ) {
        $('#select-county ul').append("<li data-id='" + key + "'>" + val + "</li>");
    });

    $('#select-county').on('click',function(e) {
        $(this).toggleClass('open');
    }).on('focus','input[name="county"]',function(){
        $(this).blur();
    })

    $('#select-county li').hover(
        function(){
            if($('#map_taiwan').length) manIcon($(this).data('id'));
        },
        function(){
            if($('#map_taiwan').length) manIcon();
        },
    ).click(function(){
        selCounty($(this).data('id'));
    });

    // topic
    $('#gsr_list .item').on('click','.head',function(){
        $(this).parent().toggleClass('open');
        if($(this).parent().hasClass('open')){
            $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        }else{
            $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });
    /*-------------------------------------------------
     * anthor by quefon
     *------------------------------------------------*/

    //search
    $('#form-search').submit(function(){
        let my_data = {};
        let theArray = new Array();
        let t = $(this).serializeArray();
        //console.log(t);
        $.each(t, function() {
            if(this.name === "topic[]") {
                theArray.push(this.value);
            }
            my_data.topic  = theArray;
            my_data[this.name] = this.value;

        });
        //alert(JSON.stringify(my_data));
        //alert(JSON.stringify(my_data.topic));
        //alert(my_data.county);
        $.ajax({
        	url: 'district.php',type: 'POST',dataType: 'json',
            data:{ country: my_data.county, district:my_data.dist, topic:my_data.topic, school:my_data.school, project:my_data.project},
        	timeout: 15000, cache: false, //async: false,
        	error: function(request, status, error){alert('Error on call');},
        	success: function(d){
        	    //console.log(d);
                $('#pages-nums span').text(d.length);
                $('#items').html('');
                $.each(d, function(i, item) {
                    //console.log(item.type);
                    var dom = $('<div>').addClass('item');
                    var head = $('<div>').addClass('head');
                    //$('<span>',{ 'class': 'zone', text: item.zone }).appendTo(head);
                    $('<span>',{ 'class': 'school', text: item.aschool}).appendTo(head);
                    $('<span>',{ 'class': 'category bg-'+item.tid, text: item.type }).appendTo(head);
                    $('<div>',{ 'class': 'title', text: item.title}).appendTo(head);
                    $('<i class="fas fa-angle-down ml-auto"></i>').appendTo(head);
                    head.appendTo(dom).on('click',function(){
                        $(this).parent().toggleClass('open');
                        if($(this).parent().hasClass('open')){
                            $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
                        }else{
                            $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
                        }
                    });
                    // content
                    $('<div>').addClass('content').html(item.content).appendTo(dom);
                    //info
                    $('<div>').addClass('content').html(
                        "<p>計畫主持人： " + item.pj_host + "<br>" +
                        "計畫聯絡人：" +  item.pj_contact + "   |   " +
                        "單位及職稱 : " +  item.pj_job + "   |   " +
                        "電話 :  " + item.pj_phone + "   |    " +
                        "電子信箱 : " + item.pj_email + "</p>").appendTo(dom);
                    //link
                    $('<div>').addClass('content').attr('id', "link-" + `${item.tid}`).html(' <a style="color:green" href="#"><i class="fas fa-download"></i>點擊下載計畫書</a>').appendTo(dom);

                    $(dom).find('a').click(function(e) {
   										e.preventDefault();  //stop the browser from following
    									newwin(item.tid,item.link);
										});
                    dom.appendTo($('#items'));

                    //$("html,body").animate({scrollTop: $('#gsr_list').offset().top - $('#header').outerHeight() -1},900);
                });
        	}
        });
        return false;
    });

    $(".goto").click(function(){
        var top = ( $($(this).attr('href')).length ) ? $($(this).attr('href')).offset().top : 0;
        $("html,body").animate({scrollTop:top},900);
        return false;
     });
});

function newwin(tid,go_to) {
	//alert("tid = " + `${tid}`);
	window.open(`${go_to}`, '_blank');
}

function showup() {
	alert('搜尋結果顯示於下方');
	let p = document.getElementById('gsr_list');
	p.removeAttribute("hidden");
}
