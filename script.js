const C=[['instansi','Nama instansi (untuk kop, opsional)'],['kopalamat','Alamat & kontak kop'],['tempat','Kota penulisan surat'],['tanggal','Tanggal','date'],['nomor','Nomor surat'],['lampiran','Lampiran'],['perihal','Perihal'],['tujuan','Kepada Yth. (nama/jabatan)'],['tujuan2','Instansi / alamat tujuan'],['nama','Nama Anda (penanda tangan)'],['jabat','Jabatan (opsional)']];
const T={
lamaran:{n:'Surat Lamaran Kerja',h:1,to:1,p:'Lamaran Pekerjaan sebagai {posisi}',f:[['posisi','Posisi yang dilamar'],['sumber','Sumber info lowongan'],['ttl','Tempat, tanggal lahir'],['pend','Pendidikan terakhir'],['alamat','Alamat'],['telp','No. telepon'],['email','Email'],['exp','Pengalaman / keahlian utama','ta']],
b:`Dengan hormat,\n\nBerdasarkan informasi lowongan yang saya peroleh dari {sumber}, saya bermaksud mengajukan lamaran untuk posisi {posisi}. Adapun data diri saya sebagai berikut:\n\nNama\t: {nama}\nTempat, tanggal lahir\t: {ttl}\nPendidikan terakhir\t: {pend}\nAlamat\t: {alamat}\nNo. telepon\t: {telp}\nEmail\t: {email}\n\n{exp}\n\nSebagai bahan pertimbangan, saya lampirkan daftar riwayat hidup, fotokopi ijazah dan transkrip nilai, serta dokumen pendukung lainnya. Saya berharap dapat diberi kesempatan wawancara untuk menjelaskan kemampuan saya lebih lanjut.\n\nDemikian surat lamaran ini saya buat. Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.`},
dinas:{n:'Surat Resmi / Dinas',h:1,to:1,c:'Hormat kami,',p:'{perihal_isi}',f:[['perihal_isi','Pokok perihal (singkat)'],['maksud','Isi pokok surat','ta'],['tindak','Harapan / tindak lanjut','ta']],
b:`Dengan hormat,\n\n{maksud}\n\n{tindak}\n\nDemikian surat ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu, kami ucapkan terima kasih.`},
undangan:{n:'Surat Undangan',h:1,to:1,c:'Hormat kami,',p:'Undangan {acara}',f:[['acara','Nama acara'],['hari','Hari, tanggal'],['waktu','Waktu'],['lokasi','Tempat'],['busana','Pakaian (opsional)'],['kontak','Narahubung']],
b:`Dengan hormat,\n\nSehubungan dengan akan diselenggarakannya {acara}, kami mengundang Bapak/Ibu/Saudara untuk berkenan hadir pada:\n\nHari, tanggal\t: {hari}\nWaktu\t: {waktu}\nTempat\t: {lokasi}\nPakaian\t: {busana}\nNarahubung\t: {kontak}\n\nMengingat pentingnya acara tersebut, kami mengharapkan kehadiran Bapak/Ibu/Saudara tepat pada waktunya.\n\nDemikian undangan ini kami sampaikan. Atas kehadiran dan perhatiannya, kami ucapkan terima kasih.`},
izin:{n:'Surat Izin (Sekolah/Kerja)',h:1,to:1,p:'Permohonan Izin {jenis}',f:[['jenis','Jenis izin (sakit, keperluan keluarga, dll.)'],['kelas','Kelas / jabatan'],['mulai','Tanggal mulai izin'],['lama','Lama izin (mis. 2 hari)'],['alasan','Alasan','ta']],
b:`Dengan hormat,\n\nSaya yang bertanda tangan di bawah ini:\n\nNama\t: {nama}\nKelas/Jabatan\t: {kelas}\n\nDengan ini mengajukan izin {jenis} selama {lama}, terhitung mulai {mulai}, dikarenakan {alasan}.\n\nDemikian surat izin ini saya buat dengan sebenarnya. Atas pengertian dan izin yang diberikan, saya ucapkan terima kasih.`},
resign:{n:'Surat Pengunduran Diri',h:1,to:1,p:'Pengunduran Diri',f:[['posisi','Jabatan saat ini'],['mulai','Tanggal efektif berhenti'],['alasan','Alasan','ta']],
b:`Dengan hormat,\n\nSaya yang bertanda tangan di bawah ini:\n\nNama\t: {nama}\nJabatan\t: {posisi}\n\nbermaksud mengajukan pengunduran diri dari jabatan tersebut, efektif pada tanggal {mulai}. Keputusan ini saya ambil karena {alasan}.\n\nSaya mengucapkan terima kasih atas kesempatan, bimbingan, dan kepercayaan yang telah diberikan. Saya bersedia menyelesaikan seluruh tanggung jawab dan serah terima pekerjaan hingga tanggal tersebut.\n\nDemikian surat pengunduran diri ini saya sampaikan. Mohon maaf atas segala kekhilafan saya, dan terima kasih atas perhatian Bapak/Ibu.`},
ket:{n:'Surat Keterangan',t:'SURAT KETERANGAN',c:'Yang menerangkan,',f:[['kn','Nama yang diterangkan'],['nik','NIK'],['ttl','Tempat, tanggal lahir'],['alamat','Alamat'],['pek','Pekerjaan / status'],['ket','Isi keterangan','ta'],['guna','Keperluan surat']],
b:`Yang bertanda tangan di bawah ini:\n\nNama\t: {nama}\nJabatan\t: {jabat}\n\nMenerangkan bahwa:\n\nNama\t: {kn}\nNIK\t: {nik}\nTempat, tanggal lahir\t: {ttl}\nAlamat\t: {alamat}\nPekerjaan/status\t: {pek}\n\n{ket}\n\nSurat keterangan ini dibuat untuk keperluan {guna}. Demikian surat keterangan ini dibuat dengan sebenarnya agar dapat dipergunakan sebagaimana mestinya.`},
pern:{n:'Surat Pernyataan',t:'SURAT PERNYATAAN',c:'Yang membuat pernyataan,',s:'m',f:[['nik','NIK'],['ttl','Tempat, tanggal lahir'],['pek','Pekerjaan'],['alamat','Alamat'],['isi_p','Isi pernyataan','ta']],
b:`Saya yang bertanda tangan di bawah ini:\n\nNama\t: {nama}\nNIK\t: {nik}\nTempat, tanggal lahir\t: {ttl}\nPekerjaan\t: {pek}\nAlamat\t: {alamat}\n\nDengan ini menyatakan dengan sebenar-benarnya bahwa:\n\n{isi_p}\n\nDemikian surat pernyataan ini saya buat dalam keadaan sadar dan tanpa paksaan dari pihak mana pun, serta saya bersedia menanggung segala akibat hukum apabila pernyataan ini terbukti tidak benar.`},
kuasa:{n:'Surat Kuasa',t:'SURAT KUASA',s:'kuasa',f:[['p_nik','NIK pemberi kuasa'],['p_alamat','Alamat pemberi kuasa'],['q_nama','Nama penerima kuasa'],['q_nik','NIK penerima kuasa'],['q_alamat','Alamat penerima kuasa'],['untuk','Kuasa diberikan untuk','ta']],
b:`Yang bertanda tangan di bawah ini:\n\nNama\t: {nama}\nNIK\t: {p_nik}\nAlamat\t: {p_alamat}\n\nSelanjutnya disebut PEMBERI KUASA. Dengan ini memberikan kuasa kepada:\n\nNama\t: {q_nama}\nNIK\t: {q_nik}\nAlamat\t: {q_alamat}\n\nSelanjutnya disebut PENERIMA KUASA.\n\n------------------------ KHUSUS ------------------------\n\nUntuk dan atas nama Pemberi Kuasa, Penerima Kuasa berwenang untuk:\n\n{untuk}\n\nSurat kuasa ini berlaku sejak tanggal ditandatangani dan dapat dicabut sewaktu-waktu oleh Pemberi Kuasa. Demikian surat kuasa ini dibuat dengan sebenarnya untuk dipergunakan sebagaimana mestinya.`},
mohon:{n:'Surat Permohonan',h:1,to:1,p:'Permohonan {hal}',f:[['hal','Hal yang dimohonkan'],['alasan','Alasan / latar belakang','ta']],
b:`Dengan hormat,\n\nSaya, {nama}, dengan ini mengajukan permohonan {hal}.\n\n{alasan}\n\nBesar harapan saya agar permohonan ini dapat dikabulkan. Atas perhatian dan kebijaksanaan Bapak/Ibu, saya ucapkan terima kasih.`},
tawar:{n:'Surat Penawaran',h:1,to:1,c:'Hormat kami,',p:'Penawaran {produk}',f:[['produk','Produk / layanan'],['harga','Harga / kisaran'],['berlaku','Masa berlaku penawaran'],['kontak','Kontak'],['unggul','Keunggulan','ta']],
b:`Dengan hormat,\n\nKami dari {instansi} bermaksud menawarkan produk/layanan kepada Bapak/Ibu dengan rincian berikut:\n\nProduk/layanan\t: {produk}\nHarga\t: {harga}\nMasa berlaku\t: {berlaku}\nKontak\t: {kontak}\n\nAdapun keunggulan penawaran kami:\n{unggul}\n\nKami berharap penawaran ini dapat menjadi pertimbangan dan membuka peluang kerja sama yang saling menguntungkan.\n\nDemikian surat penawaran ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu, kami ucapkan terima kasih.`},
komplain:{n:'Surat Pengaduan / Komplain',h:1,to:1,p:'Pengaduan {layanan}',f:[['layanan','Produk / layanan yang dikeluhkan'],['ref','No. pesanan / akun'],['tgl','Tanggal kejadian'],['kron','Kronologi','ta'],['minta','Tindak lanjut yang diminta','ta']],
b:`Dengan hormat,\n\nSaya, {nama}, ingin menyampaikan keluhan terkait {layanan} (nomor referensi: {ref}) pada tanggal {tgl}.\n\nAdapun kronologi kejadiannya sebagai berikut:\n{kron}\n\nSehubungan dengan hal tersebut, saya memohon agar:\n{minta}\n\nSaya berharap keluhan ini segera ditindaklanjuti. Atas perhatian dan penyelesaiannya, saya ucapkan terima kasih.`},
rekom:{n:'Surat Rekomendasi',h:1,to:1,c:'Hormat saya,',p:'Rekomendasi untuk {kn}',f:[['kn','Nama yang direkomendasikan'],['hub','Hubungan Anda (mis. atasan, dosen)'],['lama','Lama mengenal'],['lebih','Kelebihan / prestasi','ta'],['guna','Tujuan rekomendasi']],
b:`Dengan hormat,\n\nSaya, {nama}, dengan ini memberikan rekomendasi untuk {kn}. Saya mengenal yang bersangkutan sebagai {hub} selama {lama}.\n\nSelama itu, yang bersangkutan menunjukkan kualitas sebagai berikut:\n{lebih}\n\nBerdasarkan hal tersebut, saya merekomendasikan {kn} untuk {guna}. Saya yakin yang bersangkutan akan memberikan kontribusi yang baik.\n\nDemikian surat rekomendasi ini saya buat dengan sebenarnya. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.`},
tagih:{n:'Surat Tagihan / Teguran',h:1,to:1,c:'Hormat kami,',p:'Pemberitahuan Tagihan',f:[['inv','Nomor invoice'],['jumlah','Jumlah tagihan'],['jatuh','Tanggal jatuh tempo'],['batas','Batas waktu pembayaran'],['rek','Rekening pembayaran']],
b:`Dengan hormat,\n\nBerdasarkan catatan kami, hingga saat ini masih terdapat tagihan yang belum diselesaikan dengan rincian:\n\nNomor invoice\t: {inv}\nJumlah tagihan\t: {jumlah}\nJatuh tempo\t: {jatuh}\nPembayaran ke\t: {rek}\n\nKami mohon Bapak/Ibu dapat menyelesaikan pembayaran paling lambat {batas}. Apabila pembayaran telah dilakukan, mohon abaikan surat ini dan kirimkan bukti transfer kepada kami.\n\nDemikian kami sampaikan. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.`},
pribadi:{n:'Surat Pribadi',c:'Salam hangat,',f:[['kepada','Nama penerima'],['cerita','Isi cerita','ta']],
b:`Halo {kepada},\n\nApa kabar? Semoga kamu dan keluarga selalu sehat dan bahagia. Aku menulis surat ini untuk menyampaikan beberapa hal.\n\n{cerita}\n\nSudah dulu ya. Jaga kesehatan dan semoga kita segera bertemu.`}};
const L={};C.forEach(c=>L[c[0]]=c[1]);Object.values(T).forEach(t=>t.f.forEach(f=>L[f[0]]=f[1]));
const $=id=>document.getElementById(id),K='surat-v1';
const today=()=>new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
let v={tanggal:today()},ty='lamaran',ed=0;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ph=s=>esc(s).replace(/\[[^\]\n]+\]/g,'<mark>$&</mark>');
const fill=s=>s.replace(/\{(\w+)\}/g,(m,k)=>v[k]||'['+(L[k]||k)+']');
const fd=d=>d?new Date(d+'T00:00').toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}):'[Tanggal]';
const fld=([k,l,tp])=>`<label data-k="${k}">${l}`+(tp=='ta'?`<textarea rows="3" data-f="${k}"></textarea>`:`<input data-f="${k}"${tp=='date'?' type="date"':''}>`)+'</label>';
function gen(){if(!ed)$('isi').value=fill(T[ty].b)}
function sync(){document.querySelectorAll('[data-f]').forEach(e=>e.value=v[e.dataset.f]||'');padsync()}
function vis(){const t=T[ty],s={nomor:t.h||t.t,lampiran:t.h,perihal:t.h,tujuan:t.to,tujuan2:t.to};
 document.querySelectorAll('#cf [data-k]').forEach(e=>{const k=e.dataset.k;e.style.display=(k in s&&!s[k])?'none':''})}
function setType(t){ty=t;ed=0;$('type').value=t;$('tf').innerHTML=T[t].f.map(fld).join('');sync();vis();up()}
function up(){gen();render();try{localStorage.setItem(K,JSON.stringify({ty,v,ed,isi:ed?$('isi').value:''}))}catch(e){}}
function render(){
 const t=T[ty];let h='';
 if(v.instansi)h+=`<div class="kop"><b>${esc(v.instansi.toUpperCase())}</b>${v.kopalamat?`<small>${esc(v.kopalamat)}</small>`:''}</div>`;
 const dl=`${ph(v.tempat||'[Kota]')}, ${fd(v.tanggal)}`;
 if(t.t){h+=`<div class="ttl">${t.t}</div>`+(v.nomor?`<div class="nm">Nomor: ${esc(v.nomor)}</div>`:'<div class="nm"></div>')}
 else{h+=`<div class="r">${dl}</div>`;
  if(t.h){const pf=v.perihal||fill((t.p||'').replace('{perihal_isi}','{perihal_isi}'));
   h+=`<table class="hd">${v.nomor?`<tr><td>Nomor</td><td>: ${esc(v.nomor)}</td></tr>`:''}${v.lampiran?`<tr><td>Lampiran</td><td>: ${esc(v.lampiran)}</td></tr>`:''}<tr><td>Perihal</td><td>: <b>${ph(pf)}</b></td></tr></table>`}
  if(t.to)h+=`<p class="to">Yth. ${ph(v.tujuan||'[Nama/Jabatan Penerima]')}<br>${v.tujuan2?esc(v.tujuan2)+'<br>':''}di Tempat</p>`}
 h+='<div>'+$('isi').value.split(/\n\s*\n/).map(p=>{const ls=p.split('\n');return'<p>'+ls.map((l,i)=>{const j=l.indexOf('\t');return j>=0?`<span class="kv"><i>${ph(l.slice(0,j))}</i><span>${ph(l.slice(j+1))}</span></span>`:ph(l)+(i<ls.length-1?'<br>':'')}).join('')+'</p>'}).join('')+'</div>';
 const im=s=>/^data:image\//.test(v[s]||'')?`<img src="${v[s]}" alt="">`:'';const sg=(c,n,j,m,s)=>`<div class="sg"><div>${c}</div>${m?`<div class="mt">Meterai<br>Rp10.000${im(s)}</div>`:`<div class="sp">${im(s)}</div>`}<b><u>${ph(v[n]||'[Nama]')}</u></b>${j&&v[j]?`<div>${esc(v[j])}</div>`:''}</div>`;
 const s=t.s=='kuasa'?`<div class="two">${sg('Penerima Kuasa,','q_nama','',0,'ttd2')}${sg('Pemberi Kuasa,','nama','jabat',1,'ttd')}</div>`:`<div class="one">${sg(t.c||'Hormat saya,','nama','jabat',t.s=='m','ttd')}</div>`;
 h+=`<div class="sig">${t.t?`<div>${dl}</div>`:''}${s}</div>`;
 const p2=document.querySelector('.pad[data-k=ttd2]');if(p2)p2.style.display=ty=='kuasa'?'':'none';$('paper').innerHTML=h;$('paper').style.setProperty('--lc',v.warna||'#000000');document.querySelectorAll('.sw').forEach(b=>b.classList.toggle('on',b.dataset.c==(v.warna||'#000000')));const pe=document.querySelector('[data-f=perihal]');if(pe)pe.placeholder=fill(t.p||'');fit()}
function fit(){const w=$('view').clientWidth-24;if(w>100)$('paper').style.zoom=Math.min(1,w/794)}
function pv(x){document.body.classList.toggle('pv',!!x);fit();scrollTo(0,0)}
$('type').innerHTML=Object.entries(T).map(([k,t])=>`<option value="${k}">${t.n}</option>`).join('');
$('cf').innerHTML=C.slice(0,9).map(fld).join('');$('sf').innerHTML=C.slice(9).map(fld).join('');
document.addEventListener('input',e=>{const k=e.target.dataset.f;if(k)v[k]=e.target.value;else if(e.target.id=='isi')ed=1;else return;up()});
$('type').onchange=e=>setType(e.target.value);
$('pal').innerHTML=['#000000','#1d4ed8','#047857','#b91c1c','#7c3aed','#c2410c','#be185d'].map(c=>`<button class="sw" data-c="${c}" style="background:${c}" title="${c}"></button>`).join('');
$('pal').onclick=e=>{const c=e.target.dataset.c;if(c){v.warna=c;up()}};
$('sgp').innerHTML=[['ttd','Tanda tangan Anda'],['ttd2','Tanda tangan penerima kuasa']].map(([k,l])=>`<div class="pad" data-k="${k}"><div class="pl">${l} <small>(gambar dengan jari/mouse, atau unggah foto)</small></div><canvas width="480" height="180"></canvas><div class="pb"><button class="g" data-a="c">Hapus</button><button class="g" data-a="u">Unggah gambar</button><input type="file" accept="image/*" hidden></div></div>`).join('');
function padsync(){document.querySelectorAll('.pad').forEach(p=>{const c=p.querySelector('canvas'),x=c.getContext('2d');x.clearRect(0,0,c.width,c.height);const u=v[p.dataset.k];if(/^data:image\//.test(u||'')){const i=new Image();i.onload=()=>x.drawImage(i,0,0,c.width,c.height);i.src=u}})}
document.querySelectorAll('.pad').forEach(p=>{const k=p.dataset.k,c=p.querySelector('canvas'),x=c.getContext('2d'),f=p.querySelector('input');let d=0;x.lineWidth=3;x.lineCap=x.lineJoin='round';x.strokeStyle='#111';
 const pt=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};
 c.onpointerdown=e=>{d=1;c.setPointerCapture(e.pointerId);const[a,b]=pt(e);x.beginPath();x.moveTo(a,b);x.lineTo(a+.1,b);x.stroke()};
 c.onpointermove=e=>{if(!d)return;const[a,b]=pt(e);x.lineTo(a,b);x.stroke()};
 c.onpointerup=c.onpointercancel=()=>{if(!d)return;d=0;v[k]=c.toDataURL('image/png');up()};
 p.querySelector('[data-a=c]').onclick=()=>{x.clearRect(0,0,c.width,c.height);delete v[k];up()};
 p.querySelector('[data-a=u]').onclick=()=>f.click();
 f.onchange=()=>{const fl=f.files[0];if(!fl)return;const rd=new FileReader();rd.onload=()=>{const i=new Image();i.onload=()=>{x.clearRect(0,0,c.width,c.height);const s=Math.min(c.width/i.width,c.height/i.height),w=i.width*s,h=i.height*s;x.drawImage(i,(c.width-w)/2,(c.height-h)/2,w,h);v[k]=c.toDataURL('image/png');up()};i.src=rd.result};rd.readAsDataURL(fl);f.value=''}});
$('rs').onclick=()=>{ed=0;up()};
$('clr').onclick=()=>{v={tanggal:today()};setType(ty)};
$('pr').onclick=()=>{try{print()}catch(e){alert('Buka di tab baru lalu tekan Ctrl+P')}};
$('cp').onclick=async()=>{try{await navigator.clipboard.writeText($('paper').innerText);$('cp').textContent='Tersalin ✓'}catch(e){$('cp').textContent='Gagal menyalin'}setTimeout(()=>$('cp').textContent='Salin teks',1500)};
addEventListener('resize',fit);
try{const d=JSON.parse(localStorage.getItem(K)||'null');if(d&&T[d.ty]){v=Object.assign(v,d.v);ty=d.ty;ed=d.ed;setType(ty);if(ed){$('isi').value=d.isi;render()}}else setType(ty)}catch(e){setType(ty)}
