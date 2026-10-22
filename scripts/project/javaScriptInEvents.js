import * as RitmikSoru1 from "./ritmik_soru1.js";
import * as RitmikSoru2 from "./ritmik_soru2.js";
import * as RitmikSoru4 from "./ritmik_soru4.js";
import * as RitmikSoru3 from "./ritmik_soru3.js";
import * as RitmikSoru5 from "./ritmik_soru5.js";
import * as RitmikSoru6 from "./ritmik_soru6.js";
import * as RitmikSoru7 from "./ritmik_soru7.js";
import * as RitmikSoru8 from "./ritmik_soru8.js";
import * as RitmikSoru9 from "./ritmik_soru9.js";
import * as RitmikSoru10 from "./ritmik_soru10.js";
import * as RitmikSoru16 from "./ritmik_soru16.js";
import * as RitmikSoru19 from "./ritmik_soru19.js";
import * as RitmikSoru11 from "./ritmik_soru11.js";
import * as RitmikSoru12 from "./ritmik_soru12.js";
import * as RitmikSoru13 from "./ritmik_soru13.js";
import * as RitmikSoru14 from "./ritmik_soru14.js";
import * as RitmikSoru15 from "./ritmik_soru15.js";
import * as RitmikSoru17 from "./ritmik_soru17.js";
import * as RitmikSoru18 from "./ritmik_soru18.js";
import * as RitmikSoru20 from "./ritmik_soru20.js";
import * as RitmikGiris from "./ritmik_giris.js";


const scriptsInEvents = {

	async Giris_Event6_Act1(runtime, localVars)
	{
		RitmikGiris.baslat(runtime);
	},

	async Giris_Event7_Act1(runtime, localVars)
	{
		RitmikGiris.guncelle(runtime);
	},

	async Giris_Event8_Act1(runtime, localVars)
	{
		RitmikGiris.temizle(runtime);
	},

	async Soru4_Event1_Act1(runtime, localVars)
	{
		RitmikSoru4.baslat(runtime);
	},

	async Soru4_Event2_Act1(runtime, localVars)
	{
		RitmikSoru4.guncelle(runtime);
	},

	async Soru4_Event3_Act1(runtime, localVars)
	{
		RitmikSoru4.kontrolEt(runtime);
	},

	async Soru4_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru4_Event5_Act1(runtime, localVars)
	{
		RitmikSoru4.temizle(runtime);
	},

	async Soru6_Event1_Act1(runtime, localVars)
	{
		RitmikSoru6.baslat(runtime);
	},

	async Soru6_Event2_Act1(runtime, localVars)
	{
		RitmikSoru6.guncelle(runtime);
	},

	async Soru6_Event3_Act1(runtime, localVars)
	{
		RitmikSoru6.kontrolEt(runtime);
	},

	async Soru6_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru6_Event5_Act1(runtime, localVars)
	{
		RitmikSoru6.temizle(runtime);
	},

	async Soru1_Event1_Act1(runtime, localVars)
	{
		RitmikSoru1.baslat(runtime);
	},

	async Soru1_Event2_Act1(runtime, localVars)
	{
		RitmikSoru1.guncelle(runtime);
	},

	async Soru1_Event3_Act1(runtime, localVars)
	{
		RitmikSoru1.kontrolEt(runtime);
	},

	async Soru1_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru1_Event5_Act1(runtime, localVars)
	{
		RitmikSoru1.temizle(runtime);
	},

	async Soru2_Event1_Act1(runtime, localVars)
	{
		RitmikSoru2.baslat(runtime);
	},

	async Soru2_Event2_Act1(runtime, localVars)
	{
		RitmikSoru2.guncelle(runtime);
	},

	async Soru2_Event3_Act1(runtime, localVars)
	{
		RitmikSoru2.kontrolEt(runtime);
	},

	async Soru2_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru2_Event5_Act1(runtime, localVars)
	{
		RitmikSoru2.temizle(runtime);
	},

	async Soru3_Event1_Act1(runtime, localVars)
	{
		RitmikSoru3.baslat(runtime);
	},

	async Soru3_Event2_Act1(runtime, localVars)
	{
		RitmikSoru3.guncelle(runtime);
	},

	async Soru3_Event3_Act1(runtime, localVars)
	{
		RitmikSoru3.kontrolEt(runtime);
	},

	async Soru3_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru3_Event5_Act1(runtime, localVars)
	{
		RitmikSoru3.temizle(runtime);
	},

	async Soru5_Event1_Act1(runtime, localVars)
	{
		RitmikSoru5.baslat(runtime);
	},

	async Soru5_Event2_Act1(runtime, localVars)
	{
		RitmikSoru5.guncelle(runtime);
	},

	async Soru5_Event3_Act1(runtime, localVars)
	{
		RitmikSoru5.kontrolEt(runtime);
	},

	async Soru5_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru5_Event5_Act1(runtime, localVars)
	{
		RitmikSoru5.temizle(runtime);
	},

	async Soru7_Event1_Act1(runtime, localVars)
	{
		RitmikSoru7.baslat(runtime);
	},

	async Soru7_Event2_Act1(runtime, localVars)
	{
		RitmikSoru7.guncelle(runtime);
	},

	async Soru7_Event3_Act1(runtime, localVars)
	{
		RitmikSoru7.kontrolEt(runtime);
	},

	async Soru7_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru7_Event5_Act1(runtime, localVars)
	{
		RitmikSoru7.temizle(runtime);
	},

	async Soru9_Event1_Act1(runtime, localVars)
	{
		RitmikSoru9.baslat(runtime);
	},

	async Soru9_Event2_Act1(runtime, localVars)
	{
		RitmikSoru9.guncelle(runtime);
	},

	async Soru9_Event3_Act1(runtime, localVars)
	{
		RitmikSoru9.kontrolEt(runtime);
	},

	async Soru9_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru9_Event5_Act1(runtime, localVars)
	{
		RitmikSoru9.temizle(runtime);
	},

	async Soru10_Event1_Act1(runtime, localVars)
	{
		RitmikSoru10.baslat(runtime);
	},

	async Soru10_Event2_Act1(runtime, localVars)
	{
		RitmikSoru10.guncelle(runtime);
	},

	async Soru10_Event3_Act1(runtime, localVars)
	{
		RitmikSoru10.kontrolEt(runtime);
	},

	async Soru10_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru10_Event5_Act1(runtime, localVars)
	{
		RitmikSoru10.temizle(runtime);
	},

	async Soru8_Event1_Act1(runtime, localVars)
	{
		RitmikSoru8.baslat(runtime);
	},

	async Soru8_Event2_Act1(runtime, localVars)
	{
		RitmikSoru8.guncelle(runtime);
	},

	async Soru8_Event3_Act1(runtime, localVars)
	{
		RitmikSoru8.kontrolEt(runtime);
	},

	async Soru8_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru8_Event5_Act1(runtime, localVars)
	{
		RitmikSoru8.temizle(runtime);
	},

	async Soru11_Event1_Act1(runtime, localVars)
	{
		RitmikSoru11.baslat(runtime);
	},

	async Soru11_Event2_Act1(runtime, localVars)
	{
		RitmikSoru11.guncelle(runtime);
	},

	async Soru11_Event3_Act1(runtime, localVars)
	{
		RitmikSoru11.kontrolEt(runtime);
	},

	async Soru11_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru11_Event5_Act1(runtime, localVars)
	{
		RitmikSoru11.temizle(runtime);
	},

	async Soru13_Event1_Act1(runtime, localVars)
	{
		RitmikSoru13.baslat(runtime);
	},

	async Soru13_Event2_Act1(runtime, localVars)
	{
		RitmikSoru13.guncelle(runtime);
	},

	async Soru13_Event3_Act1(runtime, localVars)
	{
		RitmikSoru13.kontrolEt(runtime);
	},

	async Soru13_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru13_Event5_Act1(runtime, localVars)
	{
		RitmikSoru13.temizle(runtime);
	},

	async Soru18_Event1_Act1(runtime, localVars)
	{
		RitmikSoru18.baslat(runtime);
	},

	async Soru18_Event2_Act1(runtime, localVars)
	{
		RitmikSoru18.guncelle(runtime);
	},

	async Soru18_Event3_Act1(runtime, localVars)
	{
		RitmikSoru18.kontrolEt(runtime);
	},

	async Soru18_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru18_Event5_Act1(runtime, localVars)
	{
		RitmikSoru18.temizle(runtime);
	},

	async Soru20_Event1_Act1(runtime, localVars)
	{
		RitmikSoru20.baslat(runtime);
	},

	async Soru20_Event2_Act1(runtime, localVars)
	{
		RitmikSoru20.guncelle(runtime);
	},

	async Soru20_Event3_Act1(runtime, localVars)
	{
		RitmikSoru20.kontrolEt(runtime);
	},

	async Soru20_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru20_Event5_Act1(runtime, localVars)
	{
		RitmikSoru20.temizle(runtime);
	},

	async Soru14_Event1_Act1(runtime, localVars)
	{
		RitmikSoru14.baslat(runtime);
	},

	async Soru14_Event2_Act1(runtime, localVars)
	{
		RitmikSoru14.guncelle(runtime);
	},

	async Soru14_Event3_Act1(runtime, localVars)
	{
		RitmikSoru14.kontrolEt(runtime);
	},

	async Soru14_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru14_Event5_Act1(runtime, localVars)
	{
		RitmikSoru14.temizle(runtime);
	},

	async Soru12_Event1_Act1(runtime, localVars)
	{
		RitmikSoru12.baslat(runtime);
	},

	async Soru12_Event2_Act1(runtime, localVars)
	{
		RitmikSoru12.guncelle(runtime);
	},

	async Soru12_Event3_Act1(runtime, localVars)
	{
		RitmikSoru12.kontrolEt(runtime);
	},

	async Soru12_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru12_Event5_Act1(runtime, localVars)
	{
		RitmikSoru12.temizle(runtime);
	},

	async Soru15_Event1_Act1(runtime, localVars)
	{
		RitmikSoru15.baslat(runtime);
	},

	async Soru15_Event2_Act1(runtime, localVars)
	{
		RitmikSoru15.guncelle(runtime);
	},

	async Soru15_Event3_Act1(runtime, localVars)
	{
		RitmikSoru15.kontrolEt(runtime);
	},

	async Soru15_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru15_Event5_Act1(runtime, localVars)
	{
		RitmikSoru15.temizle(runtime);
	},

	async Soru16_Event1_Act1(runtime, localVars)
	{
		RitmikSoru16.baslat(runtime);
	},

	async Soru16_Event2_Act1(runtime, localVars)
	{
		RitmikSoru16.guncelle(runtime);
	},

	async Soru16_Event3_Act1(runtime, localVars)
	{
		RitmikSoru16.kontrolEt(runtime);
	},

	async Soru16_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru16_Event5_Act1(runtime, localVars)
	{
		RitmikSoru16.temizle(runtime);
	},

	async Soru17_Event1_Act1(runtime, localVars)
	{
		RitmikSoru17.baslat(runtime);
	},

	async Soru17_Event2_Act1(runtime, localVars)
	{
		RitmikSoru17.guncelle(runtime);
	},

	async Soru17_Event3_Act1(runtime, localVars)
	{
		RitmikSoru17.kontrolEt(runtime);
	},

	async Soru17_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru17_Event5_Act1(runtime, localVars)
	{
		RitmikSoru17.temizle(runtime);
	},

	async Soru19_Event1_Act1(runtime, localVars)
	{
		RitmikSoru19.baslat(runtime);
	},

	async Soru19_Event2_Act1(runtime, localVars)
	{
		RitmikSoru19.guncelle(runtime);
	},

	async Soru19_Event3_Act1(runtime, localVars)
	{
		RitmikSoru19.kontrolEt(runtime);
	},

	async Soru19_Event4_Act1(runtime, localVars)
	{
		runtime.globalVars.RitmikDogruSesBekliyor = 0;
	},

	async Soru19_Event5_Act1(runtime, localVars)
	{
		RitmikSoru19.temizle(runtime);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
