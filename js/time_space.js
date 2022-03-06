let index = -1;
let arr = ["https://res.cloudinary.com/nguyenihc/video/upload/v1633680012/000_stpaul_2039_aaa.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633921067/timespace/041_chi_0617_ubpdcx.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920964/timespace/047_qn_afternoon_pagyve.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920618/timespace/014_qtr_0613_lyhlqi.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920602/timespace/106_nap_1129_z80hgc.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920578/timespace/072_nap_2229_jdv2qp.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920519/timespace/109_qn_1243_nr48xm.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920507/timespace/110_qn_1815_s6cyxq.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920457/timespace/107_stpaul_noon_qoeaja.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920449/timespace/111_qn_1845_p6v9zw.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920435/timespace/098_dl_1526_lyoekf.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920423/timespace/108_nap_1411_fg3y89.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920418/timespace/103_stpaul_2051_pbwtre.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920407/timespace/104_qn_1815_yt6fn2.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920385/timespace/099_westChi_0955_bcg4ak.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920377/timespace/101_cHills_1924_rpmw9y.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920374/timespace/105_nap_1655_u6hmcw.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920368/timespace/095_stpaul_1714_up2i1f.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920360/timespace/102_sky_1258_xk71vx.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920358/timespace/097_redCedar_1424_cp3vxh.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920352/timespace/100_cicero_1852_zqlhig.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920344/timespace/088_nap_1506_hptx51.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920336/timespace/096_hue_1139_o3ukqi.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920336/timespace/096_hue_1139_o3ukqi.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920325/timespace/094_pilsen_1051_xlxhvl.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920323/timespace/092_hue_0533_d6wyn4.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920323/timespace/091_nap_1128_ov0l9e.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920318/timespace/093_nap_1711_qirhbn.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920311/timespace/087_qn_1830_jfv0l8.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920298/timespace/075_nap_1723_ttwprk.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920297/timespace/090_hue_0521_awvhvb.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920288/timespace/079_nap_1638_rxeyof.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920281/timespace/089_qn_0749_rnotf0.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920276/timespace/084_nap_1719_otcnop.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920274/timespace/085_qn_1336_r4ehir.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920271/timespace/082_qn_1401_xzwixv.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920256/timespace/083_nap_1617_cevgev.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920242/timespace/077_stpaul_1621_tz5pqr.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920234/timespace/080_stpaul_1451_dkkmko.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920220/timespace/073_wS_1901_pgfrmu.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920216/timespace/078_sg_0521_ssrgqo.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920206/timespace/070_qn_1830_ecqtd2.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920203/timespace/076_stpaul_1621_qssioy.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920198/timespace/071_nap_1423_ffoquo.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920179/timespace/074_nap_1132_uv5mmp.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920174/timespace/069_qn_1830_oxbyby.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920147/timespace/067_nap_1055_c8smzz.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920146/timespace/068_nap_1559_xds0js.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920145/timespace/066_nap_1934_x97fha.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920139/timespace/065_nap_0936_fxnjm9.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920135/timespace/056_cr_1209_wxz0ng.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920134/timespace/016_wS_0734_qxfpds.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920134/timespace/064_qn_1817_ajonty.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920135/timespace/056_cr_1209_wxz0ng.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920134/timespace/016_wS_0734_qxfpds.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920134/timespace/064_qn_1817_ajonty.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920133/timespace/061_sapa_0744_wd8g1v.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920123/timespace/063_qn_1732_cg7p7k.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920117/timespace/062_nap_2134_waq8nt.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920116/timespace/060_sky_1433_r3xwyo.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920110/timespace/058_cr_1156_jyo86n.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920103/timespace/057_sapa_1226_di8dr6.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920098/timespace/059_sky_0054_ty1krz.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920095/timespace/023_qn_1608_wfu9go.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920091/timespace/055_bd_1847_oq6hjm.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920091/timespace/052_cr_1007_arfq1u.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920089/timespace/050_qn_1742_g45xpi.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920088/timespace/053_qn_1750_kh8pl7.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920088/timespace/054_qn_1804_gt9d5c.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920085/timespace/051_qn_1742_gqcbly.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920084/timespace/017_qn_1825_xznv5w.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920084/timespace/049_qn_1718_madpx9.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920084/timespace/022_qn_1848_l8pljg.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920083/timespace/048_chi_1040_cmphcb.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920081/timespace/021_qn_1248_dnz96e.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920080/timespace/020_qn_1245_wt33gh.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920076/timespace/046_qn_1758_ysyltj.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920077/timespace/019_sg_0534_oooubv.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920075/timespace/045_sky_0556_eejyfr.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920074/timespace/013_nap_1814_yhroix.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920073/timespace/015_nap_1629_zgt7cg.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920073/timespace/018_qn_bp57c2.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920072/timespace/044_sky_0555_o23o2p.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920069/timespace/043_qn_2232_uzky6l.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920067/timespace/012_chi_1402_vlwemc.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920067/timespace/004_qn_0839_lycctz.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920067/timespace/040_chi_0615_txgutg.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920066/timespace/006_qn_o1pgcx.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920066/timespace/042_qn_1802_wrbide.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920064/timespace/003_qn_0630_d2laos.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920063/timespace/011_qn_1750_ghqqpt.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920063/timespace/010_dl_2140_nqrxgy.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920062/timespace/039_qn_1818_ial0cm.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920062/timespace/002_nap_1115_i5ob0v.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920062/timespace/038_qn_1742_iikfpc.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920062/timespace/009_qtr_0950_hazvxc.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920061/timespace/037_qn_0716_rzzqaj.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920061/timespace/005_dl_qn6ngr.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920060/timespace/031_qn_1832_zp7ibm.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920060/timespace/007_qn_1839_dte9x6.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920060/timespace/036_nap_0715_ul0fog.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920060/timespace/030_qn_1831_xhqj1x.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920060/timespace/008_qn_1812_eqo2hh.mp4",
"https://res.cloudinary.com/nguyenihc/video/upload/v1633920059/timespace/035_nap_0730_fbwtwa.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920059/timespace/032_qn_1812_laowss.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920058/timespace/033_hue_1420_quprnw.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920056/timespace/026_dl_1813_phgacv.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920056/timespace/001_sg_2112_m69qlp.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920057/timespace/028_qn_1811_mqmaai.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920057/timespace/029_py_1021_bsc7cu.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920056/timespace/025_dl_1332_ixzlxp.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920056/timespace/024_sg_1752_syxzru.mp4","https://res.cloudinary.com/nguyenihc/video/upload/v1633920056/timespace/027_dl_1817_niglq4.mp4"];

function shuffle(array){
  var i = array.length,
      j = 0,
      temp = null;
  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
  

document.querySelector("button").onclick = function(){ 
  index++;
  if (index >= arr.length){
    shuffle(arr); 
    index = 0;
  }
  const randomVideo= arr[index];
  document.querySelector('video.my-video').src = randomVideo;
  var location = randomVideo.substring(randomVideo.indexOf('_')+1, randomVideo.indexOf('_',randomVideo.indexOf('_') + 1))
  console.log(location)
  document.getElementById("location").innerHTML = location

  var time = randomVideo.substring(randomVideo.indexOf('_',randomVideo.indexOf('_') + 1)+1,randomVideo.lastIndexOf('_'))
  console.log(time)
  document.getElementById("time").innerHTML = time

}
