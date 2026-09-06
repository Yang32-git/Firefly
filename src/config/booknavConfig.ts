import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "favorites",
		name: "收藏夹栏",
		icon: "material-symbols:bookmark-rounded",
		desc: "常用收藏，安全资源速查",
		weight: 1600,
		items: [
			{
				title: "GTFOBins",
				url: "https://gtfobins.org/",
			},
			{
				title: "cve",
				url: "https://www.cve.org/",
			},
			{
				title: "HackTricks - HackTricks",
				url: "https://hacktricks.wiki/en/index.html",
			},
			{
				title: "Threekiii/Awesome-POC: 一个漏洞 PoC 知识库。A knowledge base for vulnerability PoCs(Proof of Concept), with 1k+ vulnerabilities.",
				url: "https://github.com/Threekiii/Awesome-POC",
			},
			{
				title: "payland",
				url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
			},
			{
				title: "CVE漏洞列表",
				url: "https://www.ipbuf.com/static/cve/1.html",
			},
			{
				title: "exp",
				url: "https://sploitus.com/",
			},
			{
				title: "仪表盘 - 极简",
				url: "https://www.wogg.cool/#/dashboard",
			},
			{
				title: "学丞-晓艳课堂",
				url: "https://ixuecheng.cn/home",
			},
			{
				title: "github.com/guchangan1/All-Defense-Tool",
				url: "https://github.com/guchangan1/All-Defense-Tool",
			},
			{
				title: "• Discord | #welcome | hack?hack!",
				url: "https://discord.com/channels/1543295085091754005/1543295278696632320",
			},
		],
	},
	{
		id: "company",
		name: "企业信息",
		icon: "material-symbols:domain-rounded",
		desc: "企业信息查询",
		weight: 1500,
		items: [
			{
				title: "天眼查",
				url: "https://www.tianyancha.com/",
			},
			{
				title: "小蓝本",
				url: "https://www.xiaolanben.com/",
			},
			{
				title: "爱企查",
				url: "https://aiqicha.baidu.com/",
			},
			{
				title: "企查查",
				url: "https://www.qcc.com/",
			},
			{
				title: "OpenCorporates",
				url: "https://opencorporates.com/",
			},
			{
				title: "启信宝",
				url: "https://www.qixin.com/",
			},
		],
	},
	{
		id: "beian",
		name: "备案信息",
		icon: "material-symbols:verified-rounded",
		desc: "网站备案信息查询",
		weight: 1400,
		items: [
			{
				title: "备案信息查询",
				url: "http://www.beianx.cn/",
			},
			{
				title: "备案管理系统",
				url: "https://beian.miit.gov.cn/",
			},
		],
	},
	{
		id: "wechat",
		name: "公众号信息",
		icon: "material-symbols:forum-rounded",
		desc: "微信公众号信息检索",
		weight: 1300,
		items: [
			{
				title: "搜狗微信搜索",
				url: "https://weixin.sogou.com/",
			},
		],
	},
	{
		id: "domain-ip",
		name: "域名与IP",
		icon: "material-symbols:dns-rounded",
		desc: "域名与 IP 信息查询",
		weight: 1200,
		items: [
			{
				title: "腾讯云域名注册查询",
				url: "https://buy.cloud.tencent.com/domain",
			},
			{
				title: "ThreatBook IP反查域名",
				url: "https://x.threatbook.cn/",
			},
			{
				title: "DNSDumpster",
				url: "https://dnsdumpster.com/",
			},
			{
				title: "CertificateSearch",
				url: "https://crt.sh/",
			},
		],
	},
	{
		id: "cyberspace",
		name: "网络空间测绘",
		icon: "material-symbols:travel-explore-rounded",
		desc: "网络空间资产测绘引擎",
		weight: 1100,
		items: [
			{
				title: "FOFA",
				url: "https://fofa.info/",
			},
			{
				title: "全球鹰(Hunter)",
				url: "http://hunter.qianxin.com/",
			},
			{
				title: "360 Quake",
				url: "https://quake.360.cn/quake/",
			},
			{
				title: "钟馗之眼(ZoomEye)",
				url: "https://www.zoomeye.org/",
			},
			{
				title: "零零信安",
				url: "https://0.zone/",
			},
			{
				title: "Shodan",
				url: "https://www.shodan.io/",
			},
			{
				title: "Censys",
				url: "https://censys.io/",
			},
			{
				title: "ONYPHE",
				url: "https://www.onyphe.io/",
			},
			{
				title: "FullHunt",
				url: "https://fullhunt.io/",
			},
			{
				title: "Soall Search Engine",
				url: "https://soall.org/",
			},
			{
				title: "Netlas",
				url: "https://app.netlas.io/responses/",
			},
			{
				title: "Leakix",
				url: "https://leakix.net/",
			},
			{
				title: "DorkSearch",
				url: "https://dorksearch.com/",
			},
		],
	},
	{
		id: "threat-intel",
		name: "威胁情报",
		icon: "material-symbols:shield-rounded",
		desc: "威胁情报与样本分析平台",
		weight: 1000,
		items: [
			{
				title: "微步在线情报社区",
				url: "https://x.threatbook.cn/",
			},
			{
				title: "奇安信威胁情报中心",
				url: "https://ti.qianxin.com/",
			},
			{
				title: "360威胁情报中心",
				url: "https://ti.360.cn/#/homepage",
			},
			{
				title: "VirusTotal",
				url: "https://www.virustotal.com/gui/",
			},
			{
				title: "VenusEye威胁情报中心",
				url: "https://www.venuseye.com.cn/",
			},
			{
				title: "绿盟科技威胁情报云",
				url: "https://ti.nsfocus.com/",
			},
			{
				title: "IBM X-Force Exchange",
				url: "https://exchange.xforce.ibmcloud.com/",
			},
			{
				title: "天际友盟安全智能平台",
				url: "https://redqueen.tj-un.com/",
			},
			{
				title: "华为安全中心平台",
				url: "https://isecurity.huawei.com/sec",
			},
			{
				title: "安恒威胁情报中心",
				url: "https://ti.dbappsecurity.com.cn/",
			},
			{
				title: "AlienVault OTX",
				url: "https://otx.alienvault.com/",
			},
			{
				title: "深信服安全中心",
				url: "https://sec.sangfor.com.cn/",
			},
			{
				title: "丁爸情报分析师的工具箱",
				url: "http://dingba.top/",
			},
			{
				title: "听风者情报源",
				url: "https://start.me/p/X20Apn",
			},
			{
				title: "GreyNoise Visualizer",
				url: "https://viz.greynoise.io/",
			},
			{
				title: "URLhaus数据库",
				url: "https://urlhaus.abuse.ch/browse/",
			},
			{
				title: "Pithus",
				url: "https://beta.pithus.org/",
			},
		],
	},
	{
		id: "enumeration",
		name: "枚举解析",
		icon: "material-symbols:manage-search-rounded",
		desc: "子域名与资产枚举",
		weight: 900,
		items: [
			{
				title: "在线子域名查询",
				url: "http://tools.bugscaner.com/subdomain/",
			},
			{
				title: "DNSGrep子域名查询",
				url: "https://www.dnsgrep.cn/subdomain",
			},
			{
				title: "OneForAll",
				url: "https://github.com/shmilylty/OneForAll",
			},
		],
	},
	{
		id: "fingerprint",
		name: "指纹识别",
		icon: "material-symbols:fingerprint-rounded",
		desc: "网站指纹识别",
		weight: 800,
		items: [
			{
				title: "Wappalyzer",
				url: "https://github.com/AliasIO/wappalyzer",
			},
			{
				title: "TideFinger潮汐",
				url: "http://finger.tidesec.net/",
			},
			{
				title: "云悉指纹",
				url: "https://www.yunsee.cn/",
			},
			{
				title: "WhatWeb",
				url: "https://github.com/urbanadventurer/WhatWeb",
			},
			{
				title: "数字观星Finger-P",
				url: "https://fp.shuziguanxing.com/#/",
			},
		],
	},
	{
		id: "utils",
		name: "辅助工具",
		icon: "material-symbols:build-rounded",
		desc: "辅助小工具",
		weight: 700,
		items: [
			{
				title: "Assetnote字典",
				url: "https://wordlists.assetnote.io/",
			},
			{
				title: "随机身份证号码生成",
				url: "https://www.lddgo.net/common/idgenerator",
			},
			{
				title: "密码生成器",
				url: "https://weakpass.com/generate",
			},
		],
	},
	{
		id: "recommended-tools",
		name: "常用推荐安全工具",
		icon: "material-symbols:recommend-rounded",
		desc: "常用推荐安全工具",
		weight: 600,
		items: [
			{
				title: "IP定位查询",
				url: "https://longyusec.com/links/go/159",
			},
			{
				title: "PeiQiWiki(佩奇漏洞文库)",
				url: "https://longyusec.com/links/go/488",
			},
			{
				title: "奇安信攻防社区",
				url: "https://longyusec.com/links/go/223",
			},
			{
				title: "GDB调试器",
				url: "https://longyusec.com/links/go/298",
			},
			{
				title: "社会工程学密码生成器",
				url: "https://longyusec.com/links/go/463",
			},
			{
				title: "Rumkin古典密码工具",
				url: "https://longyusec.com/links/go/689",
			},
			{
				title: "OpenCTI开源威胁情报",
				url: "https://longyusec.com/links/go/843",
			},
			{
				title: "Poe多模型AI",
				url: "https://longyusec.com/links/go/42",
			},
			{
				title: "腾讯哈勃文件分析",
				url: "https://longyusec.com/links/go/185",
			},
			{
				title: "在线端口扫描",
				url: "https://longyusec.com/links/go/196",
			},
			{
				title: "Seebug漏洞平台",
				url: "https://longyusec.com/links/go/199",
			},
			{
				title: "红日靶场",
				url: "https://longyusec.com/links/go/261",
			},
			{
				title: "攻防世界XCTF",
				url: "https://longyusec.com/links/go/276",
			},
			{
				title: "SharpStay持久化工具",
				url: "https://longyusec.com/links/go/445",
			},
			{
				title: "安全开源项目合集",
				url: "https://longyusec.com/links/go/464",
			},
			{
				title: "Freebuf安全门户",
				url: "https://longyusec.com/links/go/475",
			},
			{
				title: "知识大陆安全百科",
				url: "https://longyusec.com/links/go/480",
			},
			{
				title: "宝塔面板",
				url: "https://longyusec.com/links/go/549",
			},
		],
	},
	{
		id: "pentest-tools",
		name: "渗透工具合集",
		icon: "material-symbols:terminal-rounded",
		desc: "渗透测试工具合集",
		weight: 500,
		items: [
			{
				title: "FoFa资产测绘",
				url: "https://longyusec.com/links/go/113",
			},
			{
				title: "ZoomEye钟馗之眼",
				url: "https://longyusec.com/links/go/114",
			},
			{
				title: "360资产测绘",
				url: "https://longyusec.com/links/go/115",
			},
			{
				title: "鹰图平台",
				url: "https://longyusec.com/links/go/116",
			},
			{
				title: "Censys",
				url: "https://longyusec.com/links/go/117",
			},
			{
				title: "Shodan",
				url: "https://longyusec.com/links/go/118",
			},
			{
				title: "零零信安",
				url: "https://longyusec.com/links/go/119",
			},
			{
				title: "Riminal IP",
				url: "https://longyusec.com/links/go/120",
			},
			{
				title: "crt.sh历史域名",
				url: "https://longyusec.com/links/go/121",
			},
			{
				title: "云悉指纹识别",
				url: "https://longyusec.com/links/go/123",
			},
			{
				title: "OpenGps定位",
				url: "https://longyusec.com/links/go/125",
			},
			{
				title: "埃文高精度IP定位",
				url: "https://longyusec.com/links/go/126",
			},
			{
				title: "S3Scanner存储桶扫描",
				url: "https://longyusec.com/links/go/127",
			},
			{
				title: "Cloud_enum多云枚举",
				url: "https://longyusec.com/links/go/128",
			},
			{
				title: "linkedin2username",
				url: "https://longyusec.com/links/go/129",
			},
			{
				title: "LinkedInt侦察工具",
				url: "https://longyusec.com/links/go/130",
			},
			{
				title: "WitnessMe网页资产盘点",
				url: "https://longyusec.com/links/go/131",
			},
			{
				title: "AttackSurfaceMapper",
				url: "https://longyusec.com/links/go/132",
			},
			{
				title: "DomainTools IP反查",
				url: "https://longyusec.com/links/go/122",
			},
			{
				title: "本机IP查询",
				url: "https://longyusec.com/links/go/154",
			},
			{
				title: "ITDOG在线Ping",
				url: "https://longyusec.com/links/go/155",
			},
			{
				title: "IPUU IP定位",
				url: "https://longyusec.com/links/go/156",
			},
			{
				title: "PING0",
				url: "https://longyusec.com/links/go/157",
			},
			{
				title: "天眼查ICP反查",
				url: "https://longyusec.com/links/go/158",
			},
			{
				title: "IP定位查询",
				url: "https://longyusec.com/links/go/159",
			},
			{
				title: "腾讯云Whois",
				url: "https://longyusec.com/links/go/161",
			},
			{
				title: "IP138域名历史解析",
				url: "https://longyusec.com/links/go/162",
			},
			{
				title: "域名备案查询",
				url: "https://longyusec.com/links/go/163",
			},
			{
				title: "国家CN域名Whois",
				url: "https://longyusec.com/links/go/164",
			},
			{
				title: "棱角社区工具库",
				url: "https://longyusec.com/links/go/167",
			},
			{
				title: "风鸟企业查询",
				url: "https://longyusec.com/links/go/168",
			},
			{
				title: "cip.cc简洁IP查询",
				url: "https://longyusec.com/links/go/169",
			},
			{
				title: "CyberChef汉化编解码",
				url: "https://longyusec.com/links/go/170",
			},
			{
				title: "CTF在线编码工具",
				url: "https://longyusec.com/links/go/171",
			},
			{
				title: "JWT.io解析",
				url: "https://longyusec.com/links/go/172",
			},
			{
				title: "CMD5在线解密",
				url: "https://longyusec.com/links/go/173",
			},
			{
				title: "windows-kernel提权EXP",
				url: "https://longyusec.com/links/go/420",
			},
			{
				title: "跨平台提权库",
				url: "https://longyusec.com/links/go/421",
			},
			{
				title: "Watson提权枚举",
				url: "https://longyusec.com/links/go/422",
			},
			{
				title: "SharpUp提权工具",
				url: "https://longyusec.com/links/go/423",
			},
			{
				title: "dazzleUP漏洞检测",
				url: "https://longyusec.com/links/go/424",
			},
			{
				title: "PEASS提权脚本套件",
				url: "https://longyusec.com/links/go/425",
			},
			{
				title: "SweetPotato权限提升",
				url: "https://longyusec.com/links/go/426",
			},
			{
				title: "GodPotato提权工具",
				url: "https://longyusec.com/links/go/429",
			},
			{
				title: "Hunter邮箱搜集",
				url: "https://longyusec.com/links/go/124",
			},
			{
				title: "10分钟邮箱",
				url: "https://longyusec.com/links/go/457",
			},
			{
				title: "10min临时邮箱",
				url: "https://longyusec.com/links/go/458",
			},
			{
				title: "国外免费接码",
				url: "https://longyusec.com/links/go/459",
			},
			{
				title: "有信云短信接收",
				url: "https://longyusec.com/links/go/460",
			},
			{
				title: "Receive-Sms接码",
				url: "https://longyusec.com/links/go/461",
			},
			{
				title: "BestSMS验证码接收",
				url: "https://longyusec.com/links/go/462",
			},
			{
				title: "社工密码生成器",
				url: "https://longyusec.com/links/go/463",
			},
			{
				title: "安全开源项目",
				url: "https://longyusec.com/links/go/464",
			},
			{
				title: "Gophish钓鱼工具",
				url: "https://longyusec.com/links/go/470",
			},
			{
				title: "360沙箱云",
				url: "https://longyusec.com/links/go/165",
			},
			{
				title: "AnyRun恶意软件沙箱",
				url: "https://longyusec.com/links/go/186",
			},
			{
				title: "DueDLLigence白名单绕过",
				url: "https://longyusec.com/links/go/307",
			},
			{
				title: "Shhhloader Shellcode加载器",
				url: "https://longyusec.com/links/go/311",
			},
			{
				title: "SharpEDRChecker",
				url: "https://longyusec.com/links/go/354",
			},
			{
				title: "PPLKiller绕过LSA保护",
				url: "https://longyusec.com/links/go/381",
			},
			{
				title: "AndrewSpecial内存dump工具",
				url: "https://longyusec.com/links/go/383",
			},
			{
				title: "潮影在线免杀平台",
				url: "https://longyusec.com/links/go/505",
			},
			{
				title: "PEzor开源加壳器",
				url: "https://longyusec.com/links/go/506",
			},
			{
				title: "GadgetToJScript序列化工具",
				url: "https://longyusec.com/links/go/507",
			},
			{
				title: "charlotte C++免杀Shellcode",
				url: "https://longyusec.com/links/go/509",
			},
			{
				title: "xlsGen宏文档生成",
				url: "https://longyusec.com/links/go/512",
			},
			{
				title: "darkarmour AV规避",
				url: "https://longyusec.com/links/go/513",
			},
			{
				title: "OfficePurge清理VBA",
				url: "https://longyusec.com/links/go/515",
			},
			{
				title: "ThreatCheck查杀检测",
				url: "https://longyusec.com/links/go/516",
			},
			{
				title: "inceptor AV/EDR规避框架",
				url: "https://longyusec.com/links/go/518",
			},
			{
				title: "mortar检测规避工具",
				url: "https://longyusec.com/links/go/519",
			},
			{
				title: "Veil Payload免杀",
				url: "https://longyusec.com/links/go/521",
			},
			{
				title: "KeeThief密钥提取",
				url: "https://longyusec.com/links/go/378",
			},
			{
				title: "SharpStay持久化",
				url: "https://longyusec.com/links/go/445",
			},
			{
				title: "SharPersist持久化套件",
				url: "https://longyusec.com/links/go/446",
			},
			{
				title: "SharpHide隐藏注册表",
				url: "https://longyusec.com/links/go/447",
			},
			{
				title: "DAMP ACL持久化",
				url: "https://longyusec.com/links/go/449",
			},
			{
				title: "IIS-Raid IIS后门",
				url: "https://longyusec.com/links/go/450",
			},
			{
				title: "SharpEventPersist事件持久化",
				url: "https://longyusec.com/links/go/453",
			},
			{
				title: "EvilClippy恶意Office文档",
				url: "https://longyusec.com/links/go/514",
			},
			{
				title: "adysec/POC漏洞库",
				url: "https://longyusec.com/links/go/233",
			},
			{
				title: "Acunetix漏洞扫描器",
				url: "https://longyusec.com/links/go/234",
			},
			{
				title: "密码字典生成器",
				url: "https://longyusec.com/links/go/235",
			},
			{
				title: "BBOT资产扫描器",
				url: "https://longyusec.com/links/go/236",
			},
			{
				title: "Burp Suite渗透神器",
				url: "https://longyusec.com/links/go/237",
			},
			{
				title: "Metasploit渗透框架",
				url: "https://longyusec.com/links/go/239",
			},
			{
				title: "SQLMap注入工具",
				url: "https://longyusec.com/links/go/240",
			},
			{
				title: "Cobalt Strike红队平台",
				url: "https://longyusec.com/links/go/241",
			},
			{
				title: "Nuclei漏洞扫描",
				url: "https://longyusec.com/links/go/242",
			},
			{
				title: "Goby测绘工具",
				url: "https://longyusec.com/links/go/243",
			},
			{
				title: "AWVS漏洞扫描",
				url: "https://longyusec.com/links/go/244",
			},
			{
				title: "Dirsearch目录爆破",
				url: "https://longyusec.com/links/go/245",
			},
			{
				title: "Hashcat密码破解",
				url: "https://longyusec.com/links/go/246",
			},
			{
				title: "John the Ripper密码破解",
				url: "https://longyusec.com/links/go/247",
			},
		],
	},
	{
		id: "anime",
		name: "动画",
		icon: "material-symbols:movie-rounded",
		desc: "动画番剧",
		weight: 400,
		// 访问密码：Yangnb（下方为它的 SHA-256 哈希，改密码请重新生成哈希）
		passwordHash: "73006c28a8dcfd2a57f326e43171593bb8bc2dfbdc61ac8dbbd0c17a2c8183b5",
		items: [
			{
				title: "动漫 - 里番动漫影视合集_第1页 - 男尚圈",
				url: "https://www.nanshangquan.com/videoshow/4---%E9%87%8C%E7%95%AA%E5%8A%A8%E6%BC%AB--------.html",
			},
			{
				title: "正在免费在线播放<援助交配第01集>-番茄影视",
				url: "http://www.chelianjiaogui.com/fanqieplay/48211-1-1/",
			},
			{
				title: "mafavam影片合集 - Anihaven",
				url: "https://www.anihaven.me/tag/Mafavam/?site=hanime",
			},
			{
				title: "所有漫画iQQTV - 三上优亚的成人在线成人视频高清直播",
				url: "https://iqqtv.tv/comic_list.php?kw_type=key&kw=ntr",
			},
			{
				title: "Качок в грубой форме дерет чернявую Sweetie Fox - смотреть онлайн в поиске Яндекса по Видео",
				url: "https://yandsearch.yandex.ru/video/preview/9222921658495217441?q_source=title",
			},
			{
				title: "ntr-h动漫 , page 4",
				url: "https://bad.news/dm/search/q-ntr/page-4",
			},
			{
				title: "PHOTOS - Search Results For 'ntr' - 禁漫天堂",
				url: "https://18comic.vip/search/photos?main_tag=0&search_query=ntr",
			},
		],
	},
	{
		id: "wordlists",
		name: "字典",
		icon: "material-symbols:menu-book-rounded",
		desc: "字典与词表",
		weight: 300,
		items: [
			{
				title: "Weakpass",
				url: "https://weakpass.com/",
			},
			{
				title: "Download — LibreOffice",
				url: "https://www.libreoffice.org/download/",
			},
		],
	},
	{
		id: "ai",
		name: "AI",
		icon: "material-symbols:smart-toy-rounded",
		desc: "AI 工具",
		weight: 200,
		items: [
			{
				title: "Z.ai - Advanced AI Chatbot & Agent powered by GLM-5.2",
				url: "https://chat.z.ai/",
			},
			{
				title: "Grok",
				url: "https://grok.com/",
			},
		],
	},
	{
		id: "blog",
		name: "blog",
		icon: "material-symbols:article-rounded",
		desc: "博客相关",
		weight: 100,
		items: [
			{
				title: "📝 博客文章 | yang32-git/firefly@master | Pages CMS",
				url: "https://app.pagescms.org/yang32-git/firefly/master/collection/posts",
			},
			{
				title: "Firefly - Demo site",
				url: "https://yangnb.online/",
			},
			{
				title: "Yangnb的博客",
				url: "https://yangnb.pages.dev/",
			},
			{
				title: "yangnb.online - 高级 DNS - Spaceship",
				url: "https://www.spaceship.com/zh/application/advanced-dns-application/manage/yangnb.online/",
			},
			{
				title: "Sanyue ImgHub",
				url: "https://tu.yangnb.online/",
			},
		],
	},
];
