const products = [
    {
        id: 1,
        brand:"Nutrex",
        brandLogo:"/static/bodyimages/nutrex.webp",
       items:[
            {id:1, title:"Nutrex Creatine Monohydrate, 300g",price:23.99,thumbnail:"/static/bodyimages/nutrex/nutrex-creatine-monohydrate-300g.jpg",head:"A Nutrex Product Pure Creatine Monohydrate for Fuller Muscles and Explosive Strength!*" , specifics:["5g pure creatine monohydrate","Designed to enhance muscle mass, power & strength","Unflavored powder mixes with your favorite beverages","Extensively studied: safe & effective"]},
            {id:2,title:"Nutrex Anabol Hardcore, 60 Capsules ",price:34.99 ,thumbnail:"/static/bodyimages/nutrex/anabol-hardcore.webp",head:"A Nutrex Product Build Lean, Dense, High-Quality Muscles w/ Extra Hardness*",specifics:["Designed to maximize strength & muscle growth*","160mg Anabol Anabolic Activator","Take in cycles - 12 weeks on 4 weeks off","60 easy-to-swallow liquid capsules per container"]},
            {id:3,title:"Nutrex 100% Whey, 5lbs ",head:"A Nutrex Product 100% Muscle Building Fuel, Exceptional Taste",specifics:["24g protein","11.3g EAAs","5.3g BCAAs","150 calories"],price:79.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-100-whey-chocolate-5lb.webp"},
            {id:4,title:"Nutrex Lipo-6 Black Ultra Concentrate, 60 Capsules ",head:"A Nutrex Product Ultra-Concentrated Version Of The Popular Fat Burner*",specifics:["Highest potency - only 1 pill needed","Fast-absorbing liquid capsules","Powerful appetite suppressing effect*","Promotes high energy*"],price:29.99 ,thumbnail:"/static/bodyimages/nutrex/lipo6-blackuc-60_2.webp"},
            {id:5,title:"Nutrex Liquid Carnitine 3000, 31 Servings",head:"A Nutrex Product Turn Unwanted Fat Into Energy...Fast*",specifics:["Designed to optimize metabolism & enhance endurance*","3000mg l-carnitine per serving","Available in 4 delicious flavors","31 servings per bottle"],price:19.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-l-carnitine-3000-bb.webp"},
            {id:6,title:"Nutrex EAA + Hydration, 30 Servings",head:"Nutrex EAA + Hydration A Nutrex Product Fully Loaded Performance and Recovery Fuel",specifics:["8g of EAA designed to promote muscle recovery","Includes optimum 2:1:1 ratio of BCAA per scoop","Three incredibly easy to mix exotic fruit flavors","Contains ZERO sugar and no artificial colors"],price:29.99 ,thumbnail:"/static/bodyimages/nutrex/eaa-hydration-30sv-apple-pear.webp"},
            {id:7,title:"Nutrex BCAA 6000, 30 Servings",head:"A Nutrex Product Load Your Muscles with 6 Grams of Essential BCAAs",specifics:["L-Leucine, L-Isoleucine & L-Valine","6 grams of BCAAs per serving","Designed to help prevent breakdown of lean muscle","Promotes optimal post workout recovery environment"],price:18.99 ,thumbnail:"/static/bodyimages/nutrex/nutrexbcaa6000_fruitpunch.webp"},
            {id:8,title:"Nutrex Creatine Monohydrate, 1000g ",head:"Nutrex Creatine Monohydrate A Nutrex Product Pure Creatine Monohydrate for Fuller Muscles and Explosive Strength!*",specifics:["5g pure creatine monohydrate","Designed to enhance muscle mass, power & strength","Unflavored powder mixes with your favorite beverages","Extensively studied: safe & effective"],price:59.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-creatine-monohydrate-1000g.webp"},
            {id:9,title:"Nutrex 100% Whey, 10lbs ",head:"A Nutrex Product 100% Muscle Building Fuel, Exceptional Taste",specifics:["24g protein","11.3g EAAs","5.3g BCAAs","150 calories"],price:129.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-100-whey-chocolate-10lb.jpg"},
            {id:10,title:"Nutrex Lipo-6 Nighttime, 30 Capsules",head:" Nutrex Lipo-6 Nighttime A Nutrex Product Nighttime Weight Loss & Sleep Support",specifics:["552mg Nighttime Weight Loss & Sleep Support Complex","Designed to control appetite and hunger cravings","Convenient one pill dosing","30 servings per container"],price:29.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-lipo6-nighttime.webp"},
            {id:11,title:"Nutrex CLA 1000, 90 Softgels",head:"A Nutrex Product Ignite Your Metabolism for Unrivaled Leanness & Definition*",specifics:["Super-concentrated dose of naturally occurring CLA","Available in 45, 90 and 180 serving sizes","1000mg CLA Active Blend","Stimulant-free"],price:17.99 ,thumbnail:"/static/bodyimages/nutrex/cla-1000-90ct.webp"},
            {id:12,title:"Nutrex Lipo-6 Hardcore, 60 Capsules",head:"A Nutrex Product The Formula is Strong, The Results Are Real",specifics:["Powerful thermogenic formula","Designed for enhanced appetite control*","Scientifically tested ingredients","60 servings per container"] ,price:26.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-lipo6-hardcore.webp"},
            {id:13,title:"Nutrex Anabol Ripped, 60 Capsules",head:"A Nutrex Product Build Muscle & Get Shredded...At the Same Time*",specifics:["Two-in-one powerhouse formula","Hardcore muscle-building compounds*","Two effective fat-burning agents*","Advanced liquid-cap technology for rapid delivery & absorption"] ,price:39.99 ,thumbnail:"/static/bodyimages/nutrex/anabol-ripped.webp"},
            {id:14,title:"Nutrex T-Up Max, 60 Capsules",head:"A Nutrex Product Revolutionize Your Muscle Building and T-Levels",specifics:["300mg tribulus terrestris","300mg fenugreek","300mg horny goad weed","Longjack, maca & KSM-66®"] ,price:27.99 ,thumbnail:"/static/bodyimages/nutrex/tup-max.webp"},
            {id:15,title:"Nutrex Lipo-6 Defining Gel, 4 oz",head:"Nutrex Lipo-6 Defining GelA Nutrex Product TopiSorb™ Technology Allows For Localized Delivery!",specifics:["Fast acting maximum strength defining gel","Instant delivery to with TOPISORB technology","Contains Theophylline which mimics adrenaline","Fragrance free, non-greasy & won't stain clothing"] ,price:29.99 ,thumbnail:"/static/bodyimages/nutrex/lipo6-defgel.webp"},
            {id:16,title:"Nutrex 100% Whey, 2lbs",head:"A Nutrex Product 100% Muscle Building Fuel, Exceptional Taste",specifics:["24g protein","11.3g EAAs","5.3g BCAAs","150 calories"] ,price:39.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-100-whey-chocolate-2lb.webp"},
            {id:17,title:"Nutrex Glutamine Pure, 300g",head:"A Nutrex Product Pure L-Glutamine for Muscle Growth & Recovery*",specifics:["Pure L-Glutamine powder","Designed to support muscle recovery*","Immune support*","Unflavored for easy mixing"] ,price:19.99 ,thumbnail:"/static/bodyimages/nutrex/glutamine-pure-300g.webp"},
            {id:18,title:"Nutrex Lipo-6 Hers Ultra Concentrate, 60 Capsules",head:"A Nutrex Product The Fat Burner Designed Just for Women",specifics:["Powerful blend of targeted fat loss ingredients","Energizing caffeine & theobromine","Natural appetite control*","Essential B vitamins"] ,price:29.99 ,thumbnail:"/static/bodyimages/nutrex/lipo6-hers-ultra-concentrate.webp"},
            {id:19,title:"Nutrex Vitadapt, 90 Capsules",head:"A Nutrex Product Blend of 24 Vitamins & Minerals with Highly Absorbable Albion Chelated Minerals!*",specifics:["Blend of 24 vitamins & minerals","500mg vitamin C","30 servings per bottle","300mg KSM-66 (ashwagandha)"] ,price:24.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-vitadapt.webp"},
            {id:20,title:"Nutrex ISOFIT, 5lbs",head:"A Nutrex Product Guilt-Free Premium Dessert Isolate",specifics:["25g of instantized whey isolate protein per serving","Packed with 5.9g BCAAS and 12.2g EAAs","Lactose and gluten free","Unparalleled delicious gourmet taste"] ,price:68.99 ,thumbnail:"/static/bodyimages/nutrex/isofit-chocolate-shake-5lb.webp"},
            {id:21,title:"Nutrex Anabol Nighttime, 60 Capsules",head:"A Nutrex Product Push Past Plateaus and Pack on Size and Strength*",specifics:["Nighttime anabolic activator","RipFACTOR® muscle accelerator","Epicatechin for muscle growth*","MicroActive® melatonin"] ,price:39.99 ,thumbnail:"/static/bodyimages/nutrex/anabol-nighttime.webp"},
            {id:22,title:"Nutrex Tribulus 1400, 90 Capsules",head:"A Nutrex Product Natural Testosterone Support",specifics:["1400 mg Tribulus Terrestris per serving","45% saponins","45 total servings per bottle","Two easy-to-swallow caps can be taken with or without food"] ,price:15.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-tribulus1400.webp"},
            {id:23,title:"Nutrex Lipo-6 Diuretic, 80 Capsules",head:"A Nutrex Product Promotes Same Day Water Loss with Key Electrolytes",specifics:["Designed to reduce bloat & enhance definition","Contains dandelion root extract","Natural electrolyte complex","20 servings per container"] ,price:19.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-lipo6-diuretic-80ct.webp"},
            {id:24,title:"Nutrex Outlift Burn, 22 Servings",head:"A Nutrex Product Clinically Dosed Fat Burning Pre-Workout",specifics:["Includes all-new game changer ingredient Metabolyte","Designed to maximize fat loss while providing intense energy*","Powered by full dosed, research backed ingredients","Pump and strength matrix for enhanced workout performance*"] ,price:35.99 ,thumbnail:"/static/bodyimages/nutrex/outlift-burn-maui-twist.webp"},
            {id:25,title:"Nutrex Lipo-6 Black UC Powder, 30 Servings",head:"A Nutrex Product Ultra Concentrated Fat Burning Powder Exclusively Through M&S",specifics:["Ultra concentrated fal loss support complex","Powered by premium ingredients","Available in 2 delicious flavors","30 servings per container"] ,price:22.99 ,thumbnail:"/static/bodyimages/nutrex/lipo-6-buc-powder-fp.webp"},
            {id:26,title:"Nutrex Lipo-6 Black, 120 Liqui-Caps",head:"A Nutrex Product Powerful Thermogenic To Boost Metabolism & Control Appetite*",specifics:["120 easy to swallow capsules per bottle","Designed to balance food intake & control appetite","250mg L-Tyrosine per serving","Tailor your dosage to your own personal needs"] ,price:39.99 ,thumbnail:"/static/bodyimages/nutrex/lipo6-black-120ct.webp"},
            {id:27,title:"Nutrex Mass Infusion, 12lbs",head:"A Nutrex Product Complete Weight Gain Formula!",specifics:["50 grams of protein per serving","Packed with 1100 calories & 200g of carbs","Tastes delicious and mixes easily","High in natural BCAAs & essential amino acids"] ,price:89.99 ,thumbnail:"/static/bodyimages/nutrex/nutrex-mass-infusion-vanilla-12lb.webp"},
            {id:28,title:"Nutrex HMB 1000, 120 Capsules",head:"A Nutrex Product Delivers 1000mg of High Quality HMB Per Serving",specifics:["1000mg of active ß-Hydroxy ß-Methylbutyrate per serving","60 2-capsule servings per container","Should be taken prior to working out","Designed to promote lean body mass"] ,price:26.97 ,thumbnail:"/static/bodyimages/nutrex/nutrex-hmb-1000.webp"},
            {id:29,title:"Nutrex Glutamine Pure, 1000g",head:"A Nutrex Product Pure L-Glutamine for Muscle Growth & Recovery*",specifics:["Pure L-Glutamine powder","Designed to support muscle recovery*","Immune support*","Unflavored for easy mixing"] ,price:49.99 ,thumbnail:"/static/bodyimages/nutrex/glutamine-pure-1000g.webp"},
            {id:30,title:"Nutrex Lipo-6 Intense Ultra Concentrate, 60 Capsules",head:"A Nutrex Product Take Fat Burning to the Extreme",specifics:["Potent single-capsule serving","727.5mg concentrated fat-burning matrix","Energizing caffeine & theobromine","Purity & quality assurance"] ,price:29.99 ,thumbnail:"/static/bodyimages/nutrex/lipo6-intense-ultra-concentrate.webp"},
            {id:31,title:"Nutrex L-Carnitine 1000, 120 Capsules",head:"A Nutrex Product Obliterate Fat...Turn It Into Usable Energy",specifics:["Each serving yields 1000mg of pure l-carnitine","Desgined to assist in the conversion of fat into energy*","Supports diet & endurance*","Available in 60ct and 120ct sizes"] ,price:29.99 ,thumbnail:"/static/bodyimages/nutrex/lcarnitine-1000-120ct_1.webp"},
            {id:32,title:"Nutrex Muscle Infusion, 5lbs",head:"A Nutrex Product Advanced Multi-Protein Blend",specifics:["24g of high-quality protein per serving","Packed with advanced multi-protein blend","Provides whey protein concentrate & isolate","High in natural BCAAs & essential amino acids"] ,price:69.99 ,thumbnail:"/static/bodyimages/nutrex/muscleinfusion-5lb-choc.webp"},
            {id:33,title:"Nutrex ISOFIT, 2lbs",head:"A Nutrex Product Guilt-Free Premium Dessert Isolate",specifics:["25g of instantized whey isolate protein per serving","Packed with 5.9g BCAAS and 12.2g EAAs","Lactose and gluten free","Unparalleled delicious gourmet taste"] ,price:39.99 ,thumbnail:"/static/bodyimages/nutrex/isofit-chocolate-shake-2lb.webp"},

       ]
        

    },
    {   
        id:2,
        brand:"MuscleTech",
        brandLogo:"/static/bodyimages/muscletech.webp",
        items:[
            
                {id:1,title:"MT Platinum 100% Creatine,400g",price:25.99 ,thumbnail:"/static/bodyimages/mt/mt_100percentcreatine_400g_rebrand.webp" , Quote:"A MuscleTech Product Ultra-Pure Micronized Creatine That Helps In Lean Muscle Growth!*" , specifics:["Pure creatine monohydrate powder","Replenish creatine stores","HPLC tested creatine","Low cost per serving"]}
                ,{id:2,title:"MuscleTech Platinum Multivitamin, 90 Tablets",head:"A MuscleTech Product High-Potency Dose of Vitamins, Minerals, and Antioxidants*",specifics:["High potency formula designed for athletes","865mg of amino acid support","Vitamins C & E as antioxidants","Full 30 day or 60 day supply"],price:12.99,thumbnail:"/static/bodyimages/mt/mt_platinum_multi_rebrand.webp"},
                {id:3,title:"MuscleTech Cell-Tech Creactor, 120 Servings",head:"A MuscleTech Product Harness The Energy of Amplified ATP Synthesis!",specifics:["1:1 ratio of creatine hydrochloride (HCI) creatine free acid","Zero fillers, impurities, carbs or fat","No bloating or cycling required","Unflavored formula mixes easily into your favorite beverage"],price:24.99,thumbnail:"/static/bodyimages/mt/celltech_creactor_120_servings_unflavored_5.webp"},
                {id:4,title:"Hydroxycut HC Elite, 100 Capsules",head:"A MuscleTech Product An Unrivaled Thermogenic Weight-Loss and Energy Experience*",specifics:["270mg Caffeine per serving","Fully disclosed formula","200mg C. Canephora robusta extract (robusta coffee)",""],price:29.99,thumbnail:"/static/bodyimages/mt/hydroxycut_hardcore_elite_100_capsules_2.webp"},
                {id:5,title:"MuscleTech Alpha Test, 120 Capsules",head:"A MuscleTech Product Maximum-Strength Testosterone Support Formula",specifics:["50% daily value of zinc per serving","Maximum-strength formula in every dose","Powerful testosterone-boosting ingredient maxtrix","Available in 120 and 240 rapid-release bio capsule sizes"],price:27.99,thumbnail:"/static/bodyimages/mt/muscle-tech-alpha-test_1.webp"},
                {id:6,title:"MuscleTech Nitro-Tech Ripped, 4lbs",head:"A MuscleTech Product The Ultimate Protein + Weight Loss Formula*",specifics:["30 grams of fast-acting whey protein per serving","Precisely dosed with l-carnitine & MCT oil","200mg C. Cannephora Robusta","Low in calories, fat, carbs and sugars"],price:45.49,thumbnail:"/static/bodyimages/mt/nitro-tech_ripped_4lbs_chocfudgebrownie.webp"},
                {id:7,title:"MuscleTech Nitro-Tech 100% Whey Gold, 5lbs",head:"A MuscleTech Product Fuels Muscles Quickly So You Can Continue To Perform at a High Level",specifics:["24g of ultra-premium, clean protein","Microfiltered for less carbs and fat","5.5g of BCAAs and 4g of glutamine","Gluten free, easy-to-mix delicious flavors"],price:59.99,thumbnail:"/static/bodyimages/mt/whey_gold_5lb_french_vanilla_cream.webp"},
                {id:8,title:"MuscleTech Nitro-Tech Protein, 4lbs",head:"A MuscleTech Product Ultra Pure Whey Protein Isolate Enhanced w/ Creatine & Aminos!",specifics:["Whey Isolate & peptides primary source","Amplifies recovery, performance & strength*","30g Protein per serving","Delicious flavors & easy mixability!"],price:59.99,thumbnail:"/static/bodyimages/mt/nitro_tech_whey_protein_4lbs_vanilla.webp"},
                {id:9,title:"MT Platinum 100% Glutamine, 300g",head:"A MuscleTech Product Ultra-Pure Micronized Glutamine for Pre/Post-Workout!",specifics:["HPLC-tested pure Glutamine","5g Glutamine per serving","60 Servings per bottle","Supports muscle recovery and growth*"],price:25.99,thumbnail:"/static/bodyimages/mt/mt_100percent_glutamine_300g_update.webp"},
                {id:10,title:"MuscleTech Cell-Tech, 3lbs",head:"A MuscleTech Product Hardcore Creatine Formula Designed to Help Increase Mass*",specifics:["10g creatine per 2 scoop serving","Research backed + carb muscle builder","200mg ALA to support energy levels","5g amino + BCAA matrix"],price:34.99,thumbnail:"/static/bodyimages/mt/cell-tech-3lbs-fruit-punch.webp"}
                ,{id:11,title:"MuscleTech Vapor X5, 30 Servings",head:"A MuscleTech Product Explosive, Game-Changing Pre-Workout!",specifics:["3,200mg beta-alanine","3,000mg creatine monohydrate","2,500mg betaine","1,500mg Nitrosigine®"],price:34.99,thumbnail:"/static/bodyimages/mt/mt_vapor_x5_blue_razz_freeze.webp"}
                ,{id:12,title:"Hydroxycut Hardcore Super Elite, 120 Capsules",head:"A MuscleTech Product Formulated to Promote Energy, Focus, and Powerful Thermogenic Fat Loss!*",specifics:["200mg C. Canephora Robusta for healthy weight loss","100mg Zynamite® provides unique sensory effects","290mg caffeine anhydrous for extreme energy","ALA & grains of paradise added to maximize your potential"],price:49.99,thumbnail:"/static/bodyimages/mt/hydroxycut_hardcore_super_elite_120_capsules.webp"}
                ,{id:13,title:"MuscleTech Test HD Elite, 120 Capsules",head:"A MuscleTech Product Increase Testosterone Production to Increase Muscle Building Activity!",specifics:["600mg of ashwagandha designed to build muscle","Concentrated clinical doses - no cycling required","Contains EnoSTOM® and KSM-66®","120 easy to swallow capsules per bottle"] ,price:34.99,thumbnail:"/static/bodyimages/mt/hydroxycut_hardcore_super_elite_120_capsules.webp"}
                ,{id:14,title:"MuscleTech Clear Muscle, 84 Capsules",head:"A MuscleTech Product Muscle & Strength Builder For Those Who Aren't Afraid To Push Limits!",specifics:["1g of BetaTOR to boost strength and performance","250mg betaine anhydrous per capsule","84 easy-to-swallow clear liquid softgel caps per container","Designed to build muscle and accelerate recovery"] ,price:39.99,thumbnail:"/static/bodyimages/mt/clear_muscle_84_softgels.webp"}
                ,{id:15,title:"MuscleTech Platinum Multivitamin, 180 Tablets",head:"A MuscleTech Product High-Potency Dose of Vitamins, Minerals, and Antioxidants*",specifics:["High potency formula designed for athletes","865mg of amino acid support","Vitamins C & E as antioxidants","Full 30 day or 60 day supply"] ,price:19.99,thumbnail:"/static/bodyimages/mt/mt_multivitamin_180ct.jpg"}
                ,{id:16,title:"MuscleTech Muscle Builder PM, 90 Capsules",head:"A MuscleTech Product Build Muscle, Sleep Better, Optimize Recovery!",specifics:["CinDura designed to build muscle","Proven ingredients to boost testosterone","Melatonin, GABA, L-Theanine & more for sleep","No underdosed ingredients, fillers or sugar"] ,price:19.99,thumbnail:"/static/bodyimages/mt/mt_muscle_builder_pm.webp"}
                ,{id:17,title:"MuscleTech Mass-Tech Extreme 2000, 6lbs",head:"A MuscleTech Product Ultimate 100% Whey Protein Mass Gainer*",specifics:["Ultimate 100% whey protein","60g of protein per serving","Contains over 2,000 calories per serving","Great tasting flavors"] ,price:36.99,thumbnail:"/static/bodyimages/mt/mt_masstech_elite_vc_6lb.webp"}
                ,{id:18,title:"MT Mass-Tech Extreme 2000, 20lbs",head:"A MuscleTech Product Ultimate 100% Whey Protein Mass Gainer*",specifics:["Ultimate 100% whey protein","60g of protein per serving","Contains over 2,000 calories per serving","Great tasting flavors"] ,price:99.99,thumbnail:"/static/bodyimages/mt/mt_masstech_extreme2000_vm_20lb.jpg"},
                {id:19,title:"MuscleTech Cell-Tech, 6lbs",head:"A MuscleTech Product Hardcore Creatine Formula Designed to Help Increase Mass*",specifics:["10g creatine per 2 scoop serving","Research backed + carb muscle builder","200mg ALA to support energy levels","5g amino + BCAA matrix"],price:44.99,thumbnail:"/static/bodyimages/mt/cell-tech-6lbs-fruit-punch_1.webp"},
                {id:20,title:"MuscleTech Alpha Test, 240 Capsules",head:"A MuscleTech Product Maximum-Strength Testosterone Support Formula",specifics:["50% daily value of zinc per serving","Maximum-strength formula in every dose","Powerful testosterone-boosting ingredient maxtrix","Available in 120 and 240 rapid-release bio capsule sizes"],price:39.99,thumbnail:"/static/bodyimages/mt/mt_alphatest_240ct.webp"},
                {id:21,title:"Nitro-Tech 100% Whey Gold, 2lbs",head:"A MuscleTech Product Fuels Muscles Quickly So You Can Continue To Perform at a High Level",specifics:["24g of ultra-premium, clean protein","Microfiltered for less carbs and fat","5.5g of BCAAs and 4g of glutamine","Gluten free, easy-to-mix delicious flavors"],price:34.99,thumbnail:"/static/bodyimages/mt/whey_gold_2lb_french_vanilla_cream.webp"},
                {id:22,title:"MuscleTech Nitro-Tech Protein, 2.2lbs",head:"A MuscleTech Product Ultra Pure Whey Protein Isolate Enhanced w/ Creatine & Aminos!",specifics:["Whey Isolate & peptides primary source","Amplifies recovery, performance & strength*","30g Protein per serving","Delicious flavors & easy mixability!"],price:34.99,thumbnail:"/static/bodyimages/mt/mt_nitro-tech_2_2lbs_cookies_and_cream.jpg"},
                {id:23,title:"Hydroxycut Original, 72 Capsules",head:"A Hydroxycut Product Exciting New Rapid-Release Capsule Formula",specifics:["Fast-acting energy from caffeine","New formula with apple cider vinegar and essential vitamins","250% daily value of B12 per serving","100mg apple cider vinegar per serving"],price:29.99,thumbnail:"/static/bodyimages/mt/hydroxycut_original_72ct.webp"}
                ,{id:24,title:"MuscleTech Nitro-Tech, 10lbs",head:"A MuscleTech Product Ultra Pure Whey Protein Isolate Enhanced w/ Creatine & Aminos!",specifics:["Whey Isolate & peptides primary source","Amplifies recovery, performance & strength*","30g Protein per serving","Delicious flavors & easy mixability!"],price:109.99,thumbnail:"/static/bodyimages/mt/mt_nitrotech_mc_10lb_bag.webp"}
                ,{id:25,title:"MuscleTech Mass-Tech Elite,6lbs",head:"A MuscleTech Product Bulk Up, Pack On and Jack Up Your Strength!",specifics:["10 grams of ultra-pure creatine per serving","80g of multi-phase protein when mixed with skim milk","Contains ProHydrolase® for better amino absorption","12 delicious tasting easy-to-mix servings per container"],price:64.99,thumbnail:"/static/bodyimages/mt/mt_masstech_elite_vc_6lb.webp"}
                ,{id:26,title:"MuscleTech Mass-Tech Extreme 2000, 12lbs",head:"A MuscleTech Product Ultimate 100% Whey Protein Mass Gainer*",specifics:["Ultimate 100% whey protein","60g of protein per serving","Contains over 2,000 calories per serving","Great tasting flavors"],price:98.00,thumbnail:"/static/bodyimages/mt/mt_masstech_extreme2000_tcb_12lb.webp"}
                ,{id:27,title:"Six Star Muscle Explosion Pre-Workout, 30 Servings",head:"A Six Star Muscle Product Powerful Pre Workout Powder with Extreme Energy, Focus and Intensity!",specifics:["30 servings per container","1,500mg Beta-alaine per serving","Zero-sugar fruit punch taste is incredible","255mg Pre-Workout Explosion Blend"],price:29.99,thumbnail:"/static/bodyimages/mt/pre-workout-explosion-fruit-punch_new.webp"}
                ,{id:28,title:"MuscleTech IsoWhey, 5lbs",head:"A MuscleTech Product Microfiltered and Ultrafiltered Whey Protein Isolate",specifics:["25g of whey protein isolate","11.2g naturally occurring EAAs","Naturally high in BCAAs","0g added sugars"],price:119.99,thumbnail:"/static/bodyimages/mt/muscletech-isowhey-choc-5lb_1.webp"}
                ,{id:29,title:"MuscleTech EuphoriQ, 20 Servings *Exclusive Flavor*",head:"A MuscleTech Product The World's First Smart Pre-Workout Fueled by enfinity®",specifics:["300mg enfinity® (paraxanthine)","300mg AlphaSize®","1.6g nooLVL®","100mg NeuroFactor®"],price:49.99,thumbnail:"/static/bodyimages/mt/mt_euphoriq_20sv_yuzulemonade.jpg"}
                ,{id:30,title:"MuscleTech Platinum 100% EAA+, 30 Servings",head:"A MuscleTech Product Essential Amino Acids + Electrolytes",specifics:["7.4g of essential amino acids (EAAs)","4.5g branched chain amino acids (BCAAs)","3g leucine","Electrolyte blend"],price:39.99,thumbnail:"/static/bodyimages/mt/mt_plateaa_fp.webp"},
                {id:31,title:"MuscleTech 3-in-1 Testosterone Booster, 100 Capsules",head:"A MuscleTech Product Powerful 3-in-1 Complex",specifics:["300mg fenugreek extract","150mg caffeine","1.5g l-citrulline","25 day supply"],price:39.99,thumbnail:"/static/bodyimages/mt/mt_3in1_testbooster_120ct.webp"}
                ,{id:32,title:"MuscleTech Creatine Chews, 90 Chewable Tablets",head:"A MuscleTech Product Enhanced Performance with Delicious Creatine Chews",specifics:["3g of Creapure® creatine monohydrate per tablet","Convenient chewable creatine","No shaker, no powder, no mess","University tested ingredient"],price:36.99,thumbnail:"/static/bodyimages/mt/muscletech-creatine-chews-update_1.webp"}
                ,{id:33,title:"MuscleTech Nitro-Tech 100% Whey Gold, 5lbs Limited Edition",head:"A MuscleTech Product Fuels Muscles Quickly So You Can Continue To Perform at a High Level",specifics:["24g of ultra-premium, clean protein","Microfiltered for less carbs and fat","5.5g of BCAAs and 4g of glutamine","Gluten free, easy-to-mix delicious flavors"],price:79.99,thumbnail:"/static/bodyimages/mt/mt_nitrotech_wheygold_5lb_churro.jpg"}
                ,{id:34,title:"MuscleTech Amino Build, 40 Servings",head:"A MuscleTech Product Ensure You're Maximizing Muscle Recovery & Peak Performance!",specifics:["7g of performance enhancing BCAAs + electrolytes","4g of leucine designed to boost strength","Features taurine and betaine formulated to build lean muscle","40 easy-to-mix, delicious tasting servings per container"],price:34.99,thumbnail:"/static/bodyimages/mt/amino_build_40_servings_strawberry_watermelon.webp"}
                ,{id:35,title:"MuscleTech Alpha Test Thermo, 90 Capsules",head:"A MuscleTech Product Burn Baby Burn",specifics:["600mg fenugreek extract","200mg boron citrate","62.5mg aXivite®","1g l-carnitine l-tartrate"],price:34.99,thumbnail:"/static/bodyimages/mt/mt_alphatestthermo_90ct.webp"}
                ,{id:36,title:"MuscleTech ISO Whey Clear, 19 Servings",head:"A MuscleTech Product Mixes like BCAAs, With All The Benefits of A Post Workout Protein Shake!",specifics:["22 grams of pure whey protein isolate","Light and crisp flavor with easy mixability","Zero grams of fat or sugar and <1g of carbs","Amplified with ProHydrolase® for better absorption"],price:34.99,thumbnail:"/static/bodyimages/mt/mt_isowhey_clear_new_19_servings_lemon_berry_blizzard.webp"}
                ,{id:37,title:"MuscleTech Phase8 Platinum 8-Hour Protein,4.6lbs",head:"A MuscleTech Product Feed Your Muscles with 8 Hours of Sustained Amino Acid Delivery*",specifics:["26 grams of protein per serving","8 hours of amino acid delivery","7 high-quality protein sources","Provides high biological value and sustain-release protein"],price:59.99,thumbnail:"/static/bodyimages/mt/mt_phase8_platinum_8-hour_protein_milk_chocolate.webp"}
                ,{id:38,title:"MuscleTech EuphoriQ, 20 Servings",head:"A MuscleTech Product The World's First Smart Pre-Workout Fueled by enfinity®",specifics:["300mg enfinity® (paraxanthine)","300mg AlphaSize®","1.6g nooLVL®","100mg NeuroFactor®"],price:49.99,thumbnail:"/static/bodyimages/mt/mt_euphoriq_20sv_yuzulemonade.jpg"}]
        
    },

    {
           id:3,
        brand:"now",
        brandLogo:"/static/bodyimages/now.webp",
        items:[ {id:1,title:"NOW Foods Omega-3, 100 Softgels ",head:"A NOW Foods Product Molecularly Distilled Fish Oil to Support Cardiovascular Health",specifics:["1,000mg Fish Oil per softgel","180 EPA / 120 DHA per softgel","Easy to Swallow Softgels","Cardiovascular support*"],price:10.99 ,thumbnail:"/static/bodyimages/now/omega_3_100_softgels.webp" },
        {id:2,title:"NOW Foods Ultra Omega-3, 90 Softgels",head:"A NOW Foods Product EPA and DHA from Fish Oil for Healthy Heart & Brain Function!*",specifics:["500 EPA / 250 DHA","Molecularly distilled and enteric coated","Odor controlled softgel makes it easier to tolerate","Non-gmo, kosher and GMP quality assured."],price:19.99 ,thumbnail:"/static/bodyimages/now/now_ultra_omega-3_1.webp" },
            {id:3,title:"NOW Foods Ashwagandha, 90 VCaps",head:"A NOW Foods Product Free Radical Scavenger & Immune Support",specifics:["450mg of Ashwagandha per serving","Vegan, Halal and Kosher","Egg, soy, nut, dairy and gluten free","Available in 90 & 180 serving sizes"],price:15.99 ,thumbnail:"/static/bodyimages/now/ashwagandha450mg_90_vcaps.jpg"},
            {id:4,title:"NOW Foods Omega-3, 200 Softgels",head:"A NOW Foods Product Molecularly Distilled Fish Oil to Support Cardiovascular Health*",specifics:["1,000mg Fish Oil per softgel","180 EPA / 120 DHA per softgel","Easy to Swallow Softgels","Cardiovascular support*"],price:19.99 ,thumbnail:"/static/bodyimages/now/now_omega-3_1.webp"},
            {id:5,title:"NOW Foods Zinc Gluconate 50mg, 250 Tablets",head:"A NOW Foods Product Supports Enzyme Functions!",specifics:["Supports healthy immune system*","455% DV of zinc gluconate per tablet","Soy, nut, gluten, dairy and egg free","Vegan, Halal, Kosher friendly"],price:14.99 ,thumbnail:"/static/bodyimages/now/zinc_50mg_250_tablets.webp"},
            {id:6,title:"NOW Foods GABA 750, 100 Capsules ",head:"A NOW Foods Product Naturally Promotes Relaxation And Eases Nervous Tension!*",specifics:["750mg GABA per capsule","100 servings per bottle","Vegan-friendly veg capsules","Non-GMO, kosher, halal and soy free"],price:19.99 ,thumbnail:"/static/bodyimages/now/gaba_450_1.webp"},
            {id:7,title:"NOW Foods Ultra Omega-3, 180 Softgels",head:"A NOW Foods Product EPA and DHA from Fish Oil for Healthy Heart & Brain Function!*",specifics:["500 EPA / 250 DHA","Molecularly distilled and enteric coated","Odor controlled softgel makes it easier to tolerate","Non-gmo, kosher and GMP quality assured."],price:47.99 ,thumbnail:"/static/bodyimages/now/capture.webp" },
            {id:8,title:"NOW Foods Vitamin D-3, 5,000IU 120 Softgels",head:"A NOW Foods Product High Potency Vitamin D in a Highly-Absorbable Liquid Softgel!",specifics:["Supports healthy immune system*","Designed to help maintain strong bones","Soy, gluten, corn, dairy, egg free","Non-GMO, Halal, Kosher certified"],price:12.99 ,thumbnail:"/static/bodyimages/now/vitamin_d-3_5000iu_120_softgels_1.webp" },
            {id:9,title:"NOW Foods NAC 600 mg, 100 VCaps",head:"A NOW Foods Product Free Radical Protection!",specifics:["With selenium & molybdenum","Designed to maintain cellular health","Soy, dairy, egg, gluten, corn and nut free","Kosher and Halal friendly formula"],price:21.99 ,thumbnail:"/static/bodyimages/now/nac_600mg_100_vcaps.webp" },
            {id:10,title:"NOW Foods Magnesium Citrate, 120 VCaps",head:"A NOW Foods Product Critical Mineral to Support Energy & Metabolism!*",specifics:["Supports energy production*","Critical for enzyme function*","Vegan/vegetarian formula",""],price:18.99 ,thumbnail:"/static/bodyimages/now/magnesium_citrate_120_vcaps.webp" },
            {id:11,title:"NOW Foods NAC 1000mg, 120 Tablets",head:"A NOW Foods Product Supports Normal Immune System Function",specifics:["1,000mg n-acetyl cysteine (NAC) per serving","Designed to maintain cellular health","Soy, dairy, egg, gluten and nut free","Kosher and vegan friendly formula"],price:31.99 ,thumbnail:"/static/bodyimages/now/nac_1000mg_120_tablets.webp" },
            {id:12,title:"NOW Foods Ultra Omega 3-D, 90 Softgels",head:"A NOW Foods Product Omega-3 Formula For Cardiovascular Support!*",specifics:["600 EPA / 300 DHA","Molecularly Distilled","1,000 IU Vitamin D-3","Flavored with lemon oil"],price:19.99 ,thumbnail:"/static/bodyimages/now/ultra-omega-3-d-sm.webp" },
            {id:13,title:"NOW Foods Vitamin D-3 & K-2, 120 VCaps",head:"A NOW Foods Product Supports Bone Health Plus Cardiovascular Support!*",specifics:["Supports healthy immune system*","25 mcg (1000 IU) vitamin D3 per serving","35 mcg vitamin K2 per serving","Dairy, egg, soy free formula"],price:12.99 ,thumbnail:"/static/bodyimages/now/vitamin_d3_k2_120_vcaps.webp" },
            {id:14,title:"NOW Foods Zinc Gluconate 50mg, 100 Tablets",head:"A NOW Foods Product Supports Enzyme Functions!",specifics:["Supports healthy immune system*","455% DV of zinc gluconate per tablet","Soy, nut, gluten, dairy and egg free","Vegan, Halal, Kosher friendly"],price:8.99 ,thumbnail:"/static/bodyimages/now/zinc_50mg_100_tablets.webp" },
            {id:15,title:"NOW Foods Creatine Monohydrate, 227g",head:"A NOW Foods Product Maintains Optimal Levels of ATP Production when Training!*",specifics:["Supports growth of lean muscle mass*","No additives or preservatives","Vegan/vegetarian, kosher, steroid-free and non-gmo","Micronized & capsule options available"],price:19.99 ,thumbnail:"/static/bodyimages/now/now-creatine-monohydrate-8oz.webp" },

        ]

    },
    {
            id:4,
            brand:"primevalLabs",
            brandLogo:"/static/bodyimages/primeval-labs.webp",
            items:[{id:1,title:"Primeval Labs Apesh*t Pumps, 40 Servings",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/apeshit_pumps_sb.webp" },
                {id:2,title:"Primeval Labs Apesh*t Untamed, 40 Servings",price:29.99,thumbnail:"/static/bodyimages/primevalLabs/apesh-t-untamed-strawberry-lemonade (1).webp" },
                {id:3,title:"Primeval Labs Apesh*t Cutz, 50 Servings",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/apesh-t-cutz-smashberry (1).webp" },
                {id:4,title:"Primeval Labs Apesh*t Cutz, 50 Servings - M&S EXCLUSIVE FLAVOR",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/apesht_cutz_jungle_juice_update (1).webp" },
                {id:5,title:"Primeval Labs Apesh*t Test, 120 Capsules",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/apeshit_test_120_capsules (1).webp" },
                {id:6,title:"Primeval Labs Apesh*t Alpha, 40 Servings",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/apeshit_alpha_cherrylemonade.webp" },
                {id:7,title:"Primeval Labs Apesh*t Untamed, 40 Servings - M&S EXCLUSIVE FLAVOR",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/apeshit_untamed_junglejuice (1).webp" },
                {id:8,title:"Primeval Labs Vasogorge, 125 Capsules",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/pvl_vasogorge_125_capsules.webp" },
                {id:9,title:"Primeval Labs Mega Test, 120 Capsules",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/pvl_mega_test_120ct.webp" },
                {id:10,title:"Primeval Labs ISOLIT, 5lbs",price:109.99 ,thumbnail:"/static/bodyimages/primevalLabs/isolit_5lb_chocolatemilk.webp" },
                {id:11,title:"Primeval Labs Creatine, 1 Stick Pack",price:1.99 ,thumbnail:"/static/bodyimages/primevalLabs/pvl_creatine_stick.webp" },
                {id:12,title:"Primeval Labs EAA Max, 30 Servings",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/eaa_max_orangesherbet.webp" },
                {id:13,title:"Primeval Labs Epibolic w/ Longjack, 60 Capsules",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/primevallabs_epibolic.webp" },
                {id:14,title:"Primeval Labs Apesh*t Test PM, 90 Capsules",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/apeshit_testpm.webp" },
                {id:15,title:"Primeval Labs Apesh*t Heat, 60 Capsules",price:27.99 ,thumbnail:"/static/bodyimages/primevalLabs/apeshit_heat.webp" },
                {id:16,title:"Primeval Labs Whey, 1.5lbs",price:39.99 ,thumbnail:"/static/bodyimages/primevalLabs/whey_ssc.webp" },
                {id:17,title:"Primeval Labs Primavar, 60 Capsules",price:44.99 ,thumbnail:"/static/bodyimages/primevalLabs/primevallabs_primavar (1).webp" },
                {id:18,title:"Primeval Labs Whey, 5lbs",price:69.99 ,thumbnail:"/static/bodyimages/primevalLabs/pvl_whey_5lb_dinervanilla_2.webp" },
                {id:19,title:"Primeval Labs Mega Test PM, 90 Capsules",price:29.99 ,thumbnail:"/static/bodyimages/primevalLabs/primevallabs_megatestpm.webp" },
                {id:20,title:"Primeval Labs Whey, 5lbs",price:69.99 ,thumbnail:"/static/bodyimages/primevalLabs/pvl_whey_5lb_chocolatemilk.webp" },
                {id:21,title:"Primeval Labs Creatine, 300g",price:24.99 ,thumbnail:"/static/bodyimages/primevalLabs/primeval_creatine_300g.webp" },
                {id:22,title:"Primeval Labs Creatine, 30 Stick Packs",price:34.99 ,thumbnail:"/static/bodyimages/primevalLabs/pvl_creatine_sticks_bag.webp" },


            ]

    },
    {
        id: 5,
        brand:"Allmax",
        brandLogo:"/static/bodyimages/allmax/allmaxLogoBrand.webp",
       items:[{id:1,title:"AllMax Nutrition AminoCuts, 30 Servings",price:23.99,thumbnail:"/static/bodyimages/allmax/aminocuts_pina.webp",},
        {id:2,title:"AllMax Nutrition Micronized Creatine Monohydrate, 400g ",price:29.99,thumbnail:"/static/bodyimages/allmax/allmax_creatine_400g.webp",},
        {id:3,title:"AllMax Nutrition Vitaform, 60 Tablets ",price:15.99,thumbnail:"/static/bodyimages/allmax/premium_vitaform_60_tablets.webp",},
        {id:4,title:" AllMax Nutrition Igniter Sport, 50 Servings",price:29.99,thumbnail:"/static/bodyimages/allmax/impact-igniter-sport-blue-raspberry.webp",},
        {id:5,title:"AllMax Nutrition Classic AllWhey, 5lbs",price:45.99,thumbnail:"/static/bodyimages/allmax/classicallwhey_5lbs_chocolate.webp",},
        {id:6,title:"AllMax Nutrition Micronized Creatine Monohydrate, 1,000g",price:59.99,thumbnail:"/static/bodyimages/allmax/creatine1000_3.webp",},
        {id:7,title:"AllMax Nutrition AllMass, 5lbs",price:49.99,thumbnail:"/static/bodyimages/allmax/allmass-5lb-choc.webp",},
        {id:8,title:"AllMax Nutrition IsoFlex, 2lbs",price:44.99,thumbnail:"/static/bodyimages/allmax/isoflex_2lb-chocolate.webp",},
        {id:9,title:"AllMax Nutrition Gold AllWhey, 5lbs",price:64.99,thumbnail:"/static/bodyimages/allmax/allwhey-gold-5lbs-choc-new_1.webp",},
        {id:10,title:"AllMax Nutrition AminoCore, 30 Servings",price:32.99,thumbnail:"/static/bodyimages/allmax/aminocore_30_servings_fruit_punch.webp",},
        {id:11,title:" AllMax Nutrition Muscle Prime, 50 Servings",price:27.99,thumbnail:"/static/bodyimages/allmax/muscleprime_266g_whiteraspberry.webp",},
        {id:12,title:"AllMax Nutrition IsoFlex, 5lbs",price:89.99,thumbnail:"/static/bodyimages/allmax/isoflex_5lb-chocolate.webp",},
        {id:12,title:"AllMax Nutrition HexaPro, 5lbs",price:64.99,thumbnail:"/static/bodyimages/allmax/hexapro5lb-choc.webp",},
        {id:12,title:"AllMax Nutrition Classic AllWhey, 2lbs",price:29.99,thumbnail:"/static/bodyimages/allmax/classicallwhey_2lbs_chocolate.webp",},
       ]
    }
    ,
    {
        id: 6,
        brand:"rule1",
        brandLogo:"/static/bodyimages/rule1/rule1.webp",
    },
    {
        id: 7,
        brand:"optimum nutrition",
        brandLogo:"/static/bodyimages/ON/ON.webp",
    },
    {
        id: 8,
        brand:"bsn",
        brandLogo:"/static/bodyimages/bsn/bsn.webp",
    },
    {
        id: 9,
        brand:"forcefactor",
        brandLogo:"/static/bodyimages/forceFactor/forceFactor.webp",
    },
    {
        id: 10,
        brand:"cellucore",
        brandLogo:"/static/bodyimages/cellucore/cellucore.webp",
    },
    {
        id: 11,
        brand:"dymatize",
        brandLogo:"/static/bodyimages/Dymatize/dymatize.webp",
    },
    {
        id: 12,
        brand:"perfectSport",
        brandLogo:"/static/bodyimages/PerfectSport/perfectSport.webp",
    },

    
]
const newAt=[

    {
        id:1,
         thumbnail: "/static/bodyimages/1.webp",
        title:"8 Week Fat Loss Workout for Beginners",
        lorem:"This 4-day program is designed to help you burn fat without burning too much time on the clock. You'll also learn the basics of fat loss nutrition and recovery.",
        

    },
    {
        id:2,
         thumbnail: "/static/bodyimages/2.webp",
        title:"Awesome Arms: 8 Weeks to Better Biceps and Triceps",
        lorem:"Build better biceps and triceps in just 30-40 minutes. This awesome arm workout can be completed independently or added to your current program for extra gains.",
        

    },
    {
        id:3,
         thumbnail: "/static/bodyimages/3.webp",
        title:"Big and Strong: 8 Week Advanced Strength Building Workout",
        lorem:"Unlock unmatched strength with this 5-day strength-building workout. This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks.",
        

    },
    {
        id:4,
         thumbnail: "/static/bodyimages/4.webp",
        title:"Jamal Browner’s 2-Day Deadlifting Program: Deadlift 1,000+ Lbs",
        lorem:"Build up to a new 1RM in just 8-9 weeks! This program is designed to strip away the complexity and hone in on the essential elements of a world-class deadlift program.",
        

    },
    {
        id:5,
         thumbnail: "/static/bodyimages/5.webp",
        title:"Sculpted Strength: The Ultimate 12 Week Bodybuilding Program",
        lorem:"Build your best physique in three months with this complete routine. This 6-day program focuses on each muscle group, emphasizing muscle shape, size, and definition.",
        

    },
    {
        id:6,
         thumbnail: "/static/bodyimages/6.webp",
        title:"3 Day Push/Pull/Legs (PPL) Workout for Beginners",
        lorem:"This push/pull/legs routine is a simple, yet effective workout split that hits the whole body in just 3 days a week, and helps you increase strength and build muscle.",
        

    },
]
const trending = [
    {
        id:1,
        thumbnail:"/static/bodyimages/b1.jpg",
        title:"Dumbbell Only Workout: 5 Day Dumbbell Workout Split",
        parag:"This 5 day dumbbell only workout program only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!"
    },
    {
        id:2,
        thumbnail:"/static/bodyimages/b2.webp",
        title:"10 Week Mass Building Program",
        parag:"This workout is designed to increase your muscle mass as much as possible in 10 weeks. Works each muscle group hard once per week using mostly heavy compound exercises.",
    },
    {
        id:3,
        thumbnail:"/static/bodyimages/b3.jpg",
        title:"6 Day Push/Pull/Legs (PPL) Powerbuilding Workout Split & Meal Plan",
        parag:"This 6 day push/pull/legs workout routine split is a high volume, rest-pause system designed for intermediate lifters looking to gain muscle and strength.",
    },
    {
        id:4,
        thumbnail:"/static/bodyimages/b4.webp",
        title:"Dumbbell Only Workout: 3 Day Full Body Dumbbell Workout",
        parag:"This workout program only requires dumbbells, has just the right amount of volume to promote muscle growth, and is perfect to do at home or on the go.",
    },
    {
        id:5,
        thumbnail:"/static/bodyimages/b5.webp",
        title:"4 Day Maximum Mass Workout",
        parag:"A mass building routine that features a great combination of effective compound and isolation movements along with intense, high impact five minute burn sets.",
    },
    {
        id:6,
        thumbnail:"/static/bodyimages/b6.webp",
        title:"Muscle & Strength Full Body Workout Routine",
        parag:"This M&S mass building routine is perfect for lifters who want to give full body workouts a try. All major muscle groups are trained, and the program includes a 20 rep set of squats.",
    }
]
const articles=[
    {
        id:1,
        thumbnail:"/static/bodyimages/c1.jpg",
        title:"7 Lat Pulldown Variations for Serious Back Development",
        parag:"Build your lats in a variety of ways with these 7 lat pulldown variations! Read the article, find ones that'll fit well with your program, & build your back!"

    },
    {
        id:2,
        thumbnail:"/static/bodyimages/c2.webp",
        title:"Your Body Type - Ectomorph, Mesomorph or Endomorph?",
        parag:"Your body type can influence how you respond to different types of workouts and diet plans. This guide helps you understand your body type (ectomorph, mesomorph or endomorph) and how you can structure your workout and diet for success."

    },
    {
        id:3,
        thumbnail:"/static/bodyimages/c3.webp",
        title:"What Are The Ideal Body Measurements?",
        parag:"Find out what the ideal measurements are for a natural bodybuilder or a classical muscular male physique."

    },
    {
        id:4,
        thumbnail:"/static/bodyimages/c4.webp",
        title:"The Clean Eating Diet Plan Guide",
        parag:"Learn everything you need to know before starting the Clean Eating Diet plan including it's history, guidelines & components, & all of the science behind it."

    },
    {
        id:5,
        thumbnail:"/static/bodyimages/c5.webp",
        title:"Shredded! A Complete Guide To Getting to 10% Body Fat",
        parag:"Learn how having an effective diet, training, and recovery plan are key components to getting amazing body transformation results."

    },
    {
        id:6,
        thumbnail:"/static/bodyimages/c6.jpg",
        title:"What Is Strong? Real World Strength Standards For Raw, Natural Lifters",
        parag:"What is strong? I've analyzed the national records for several major drug-free powerlifting federations, and compiled my own set of raw strength standards."

    },
    
]
const brandIcons =[
    {    id:1,
         thumbnail:"/static/bodyimages/muscletech.webp"},
    {    id:2,
         thumbnail:"/static/bodyimages/nutrex.webp"},
    {    id:3,
         thumbnail:"/static/bodyimages/now.webp"},
    {    id:4,
         thumbnail:"/static/bodyimages/primeval-labs.webp"},
    {    id:5,
         thumbnail:"/static/bodyimages/allmax.webp"},
    {    id:6,
         thumbnail:"/static/bodyimages/rule1.webp"},
    {    id:7,
         thumbnail:"/static/bodyimages/ON.webp"},
    {    id:8,
         thumbnail:"/static/bodyimages/bsn.webp"},
    {    id:9,
         thumbnail:"/static/bodyimages/force-factor.webp"},
    {    id:10,
         thumbnail:"/static/bodyimages/cellucore.webp"},
    {    id:11,
         thumbnail:"/static/bodyimages/dymatize.webp"},
    {    id:12,
         thumbnail:"/static/bodyimages/perfect-sports.webp"},
         {    id:13,
            thumbnail:"/static/bodyimages/rc.webp"},
            {    id:14,
                thumbnail:"/static/bodyimages/myprotein.webp"},
                {    id:15,
                    thumbnail:"/static/bodyimages/mutant.webp"},
                    {    id:16,
                        thumbnail:"/static/bodyimages/gat.webp"},
                        {    id:17,
                            thumbnail:"/static/bodyimages/animal.webp"},
                            {    id:18,
                                thumbnail:"/static/bodyimages/man.webp"},
                                {    id:19,
                                    thumbnail:"/static/bodyimages/bpi.webp"},
                                    {    id:20,
                                        thumbnail:"/static/bodyimages/magnum.webp"},
]

const deals =[

            {
                id: 1,
                thumbnail:"/static/DealsImages/ClassicAllwhey_5lbs_Chocolate_2.webp",
                title:"AllMax Classic AllWhey, 5lbs",
                dealsInfo:"LIMITED TIME PRICE CUT",
                price:39.99
            }, {
                id: 2,
                thumbnail:"/static/DealsImages/2024_MnSAward_Product_IMGs_Creatine_1.webp",
                title:"Nutrex Creatine Monohydrate, 300g",
                dealsInfo:"LIMITED TIME PRICE CUT",
                price:9.99
            }, {
                id: 3,
                thumbnail:"/static/DealsImages/r1p_5lb_choc.webp",
                title:"Rule 1 R1 Protein Isolate, 5lbs",
                dealsInfo:"PRICE CUT + FREE Creatine 30sv",
                price:69.99
            }, {
                id: 4,
                thumbnail:"/static/DealsImages/2024_SuppMadness_ProductIMGs_NoXplode_v2_6_1.webp",
                title:"BSN NO-Xplode, 30 Servings",
                dealsInfo:"Buy 1 Get 1 FREE",
                price:49.99
            }, {
                id: 5,
                thumbnail:"/static/DealsImages/2024_MandSAward_Product_IMGs_BCAA_2_2.webp",
                title:"Scivation XTend, 30 Servings",
                dealsInfo:"Buy 1 Get 1 FREE",
                price:34.99
            }, {
                id: 6,
                thumbnail:"/static/DealsImages/2024_MnSAward_Product_IMGs_Vitamin_1.webp",
                title:"MuscleTech Platinum Multivitamin, 90 Tablets",
                dealsInfo:"LIMITED TIME PRICE CUT",
                price:12.99
            }, {
                id: 7,
                thumbnail:"/static/DealsImages/ON_AE_BlueberryMojito30_2.webp",
                title:"ON Amino Energy, 30 Servings",
                dealsInfo:"LIMITED TIME PRICE CUT",
                price:19.99
            }, {
                id: 8,
                thumbnail:"/static/DealsImages/mega-d3-mk7-120ct.webp",
                title:"NOW Foods Mega D-3 & MK-7, 120 VCaps",
                dealsInfo:"LIMITED TIME PRICE CUT",
                price:18.99
            }, {
                id: 9,
                thumbnail:"/static/DealsImages/ff-longjack-max.webp",
                title:"Force Factor Longjack Max, 60 VCaps",
                dealsInfo:"Buy 1 Get 1 FREE",
                price:29.99
            }, {
                id: 10,
                thumbnail:"/static/DealsImages/apesh-t-cutz-smashberry.webp",
                title:"Primeval Labs APESH*T Cutz, 50 Servings",
                dealsInfo:"Buy 1 Get 1 FREE",
                price:29.99
            }, {
                id: 11,
                thumbnail:"/static/DealsImages/iso100_5lb_gourchoc_lg_1_40.webp",
                title:"Dymatize ISO100, 5lbs",
                dealsInfo:"LIMITED TIME PRICE CUT",
                price:103.99
            }, {
                id: 12,
                thumbnail:"/static/DealsImages/myprotein_impactwheyprotein_5.webp",
                title:"Myprotein Impact Whey Protein, 5.5lbs",
                dealsInfo:"LIMITED TIME PRICE CUT",
                price:45.99
            },
]

module.exports = {products,newAt,trending,articles,brandIcons,deals}





