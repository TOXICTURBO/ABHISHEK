let handler = m => m
handler.all = async function (m) {
    
  if (/^.menu$/i.test(m.text) ) {
    let av = './src/mp3/menu.mp3'
    this.sendPresenceUpdate('recording', m.chat);
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^bgm$/i.test(m.text) ) {
    let av = './src/mp3/bgm.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
   
   if (/^Akhil$/i.test(m.text) ) {
    let av = './src/mp3/Akhil.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^alive$/i.test(m.text) ) {
    let av = './src/mp3/alive.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Aliya$/i.test(m.text) ) {
    let av = './src/mp3/Aliya.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Aliyo$/i.test(m.text) ) {
    let av = './src/mp3/Aliyo.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^alone$/i.test(m.text) ) {
    let av = './src/mp3/alone.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Althaf$/i.test(m.text) ) {
    let av = './src/mp3/Althaf.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Ameer$/i.test(m.text) ) {
    let av = './src/mp3/Ameer.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ano$/i.test(m.text) ) {
    let av = './src/mp3/ano.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ara$/i.test(m.text) ) {
    let av = './src/mp3/ara.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Ardra$/i.test(m.text) ) {
    let av = './src/mp3/Ardra.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ayilla$/i.test(m.text) ) {
    let av = './src/mp3/ayilla.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^aysheri$/i.test(m.text) ) {
    let av = './src/mp3/aysheri.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ayn$/i.test(m.text) ) {
    let av = './src/mp3/ayn.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Ayyo$/i.test(m.text) ) {
    let av = './src/mp3/Ayyo.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^baby$/i.test(m.text) ) {
    let av = './src/mp3/baby.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Back$/i.test(m.text) ) {
    let av = './src/mp3/Back.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^bad boy$/i.test(m.text) ) {
    let av = './src/mp3/bad boy.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Bad$/i.test(m.text) ) {
    let av = './src/mp3/Bad.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Bhasi$/i.test(m.text) ) {
    let av = './src/mp3/Bhasi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^bie$/i.test(m.text) ) {
    let av = './src/mp3/bie.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^big fan$/i.test(m.text) ) {
    let av = './src/mp3/big fan.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Blackzue$/i.test(m.text) ) {
    let av = './src/mp3/Blackzue.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Boss$/i.test(m.text) ) {
    let av = './src/mp3/Boss.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Bot$/i.test(m.text) ) {
    let av = './src/mp3/Bot.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^broken$/i.test(m.text) ) {
    let av = './src/mp3/broken.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^brokenlove$/i.test(m.text) ) {
    let av = './src/mp3/brokenlove.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Bye$/i.test(m.text) ) {
    let av = './src/mp3/Bye.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^care$/i.test(m.text) ) {
    let av = './src/mp3/care.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Chathi$/i.test(m.text) ) {
    let av = './src/mp3/Chathi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^chatho$/i.test(m.text) ) {
    let av = './src/mp3/chatho.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Chathy$/i.test(m.text) ) {
    let av = './src/mp3/Chathy.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Chetta$/i.test(m.text) ) {
    let av = './src/mp3/Chetta.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Chiri$/i.test(m.text) ) {
    let av = './src/mp3/Chiri.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Chunk$/i.test(m.text) ) {
    let av = './src/mp3/Chunk.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^chunke$/i.test(m.text) ) {
    let av = './src/mp3/chunke.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^chunks$/i.test(m.text) ) {
    let av = './src/mp3/chunks.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^comedy$/i.test(m.text) ) {
    let av = './src/mp3/comedy.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^cr7$/i.test(m.text) ) {
    let av = './src/mp3/cr7.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Cristiano$/i.test(m.text) ) {
    let av = './src/mp3/Cristiano.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Cry$/i.test(m.text) ) {
    let av = './src/mp3/Cry.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^da$/i.test(m.text) ) {
    let av = './src/mp3/da.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^dai$/i.test(m.text) ) {
    let av = './src/mp3/dai.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^die$/i.test(m.text) ) {
    let av = './src/mp3/die.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Dora$/i.test(m.text) ) {
    let av = './src/mp3/Dora.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^eda$/i.test(m.text) ) {
    let av = './src/mp3/eda.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Ellarum ede'$/i.test(m.text) ) {
    let av = './src/mp3/Ellarum ede.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ennitt$/i.test(m.text) ) {
    let av = './src/mp3/ennitt.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Entha cheyya$/i.test(m.text) ) {
    let av = './src/mp3/Entha cheyya.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^entha$/i.test(m.text) ) {
    let av = './src/mp3/entha.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Enthada$/i.test(m.text) ) {
    let av = './src/mp3/Enthada.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Fasil$/i.test(m.text) ) {
    let av = './src/mp3/Fasil.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Fan$/i.test(m.text) ) {
    let av = './src/mp3/Fan.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^fd$/i.test(m.text) ) {
    let av = './src/mp3/fd.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Feel aayi$/i.test(m.text) ) {
    let av = './src/mp3/Feel aayi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^fek$/i.test(m.text) ) {
    let av = './src/mp3/fek.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ff$/i.test(m.text) ) {
    let av = './src/mp3/ff.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^free$/i.test(m.text) ) {
    let av = './src/mp3/free.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^frnd$/i.test(m.text) ) {
    let av = './src/mp3/frnd.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Gd mng$/i.test(m.text) ) {
    let av = './src/mp3/Gd mng.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^gd n8$/i.test(m.text) ) {
    let av = './src/mp3/gd n8.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Gd ngt$/i.test(m.text) ) {
    let av = './src/mp3/Gd ngt.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^gdmng$/i.test(m.text) ) {
    let av = './src/mp3/gdmng.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^gdngt$/i.test(m.text) ) {
    let av = './src/mp3/gdngt.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^good bye$/i.test(m.text) ) {
    let av = './src/mp3/good bye.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^group$/i.test(m.text) ) {
    let av = './src/mp3/group.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^grp$/i.test(m.text) ) {
    let av = './src/mp3/grp.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Ha$/i.test(m.text) ) {
    let av = './src/mp3/Ha.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^hate$/i.test(m.text) ) {
    let av = './src/mp3/hate.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Haters$/i.test(m.text) ) {
    let av = './src/mp3/Haters.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Hbd$/i.test(m.text) ) {
    let av = './src/mp3/Hbd.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Hbday$/i.test(m.text) ) {
    let av = './src/mp3/Hbday.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^he$/i.test(m.text) ) {
    let av = './src/mp3/he.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^hello$/i.test(m.text) ) {
    let av = './src/mp3/hello.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^hi$/i.test(m.text) ) {
    let av = './src/mp3/hi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^hlo$/i.test(m.text) ) {
    let av = './src/mp3/hlo.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^hloo$/i.test(m.text) ) {
    let av = './src/mp3/hloo.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^hoi$/i.test(m.text) ) {
    let av = './src/mp3/hoi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^hy$/i.test(m.text) ) {
    let av = './src/mp3/hy.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^i am back$/i.test(m.text) ) {
    let av = './src/mp3/bgm.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ijathi$/i.test(m.text) ) {
    let av = './src/mp3/ijathi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kadhal$/i.test(m.text) ) {
    let av = './src/mp3/kadhal.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kali$/i.test(m.text) ) {
    let av = './src/mp3/kali.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Kanapi$/i.test(m.text) ) {
    let av = './src/mp3/Kanapi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Kanaran$/i.test(m.text) ) {
    let av = './src/mp3/Kanaran.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Kanjan$/i.test(m.text) ) {
    let av = './src/mp3/Kanjan.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Kanjav$/i.test(m.text) ) {
    let av = './src/mp3/Kanjav.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kar98$/i.test(m.text) ) {
    let av = './src/mp3/kar98.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Kemam$/i.test(m.text) ) {
    let av = './src/mp3/Kemam.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kenzo$/i.test(m.text) ) {
    let av = './src/mp3/kenzo.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Kenzoo$/i.test(m.text) ) {
    let av = './src/mp3/Kenzoo.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kerivaa$/i.test(m.text) ) {
    let av = './src/mp3/kerivaa.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Kevin$/i.test(m.text) ) {
    let av = './src/mp3/Kevin.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kgf$/i.test(m.text) ) {
    let av = './src/mp3/kgf.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^killadi$/i.test(m.text) ) {
    let av = './src/mp3/killadi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^king$/i.test(m.text) ) {
    let av = './src/mp3/kiss.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kk$/i.test(m.text) ) {
    let av = './src/mp3/kk.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^koi$/i.test(m.text) ) {
    let av = './src/mp3/koi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kozhi$/i.test(m.text) ) {
    let av = './src/mp3/kozhi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Kukku$/i.test(m.text) ) {
    let av = './src/mp3/Kukku.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kundan$/i.test(m.text) ) {
    let av = './src/mp3/kundan.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
   if (/^kunju$/i.test(m.text) ) {
    let av = './src/mp3/kunju.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kunna$/i.test(m.text) ) {
    let av = './src/mp3/kunna.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kurup$/i.test(m.text) ) {
    let av = './src/mp3/kurup.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^kutty$/i.test(m.text) ) {
    let av = './src/mp3/kutty.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^la ba$/i.test(m.text) ) {
    let av = './src/mp3/la ba.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^left$/i.test(m.text) ) {
    let av = './src/mp3/left.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^legend$/i.test(m.text) ) {
    let av = './src/mp3/legend.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Leopucha$/i.test(m.text) ) {
    let av = './src/mp3/Leopucha.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^life$/i.test(m.text) ) {
    let av = './src/mp3/life.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^line$/i.test(m.text) ) {
    let av = './src/mp3/line.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^lo$/i.test(m.text) ) {
    let av = './src/mp3/lo.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^loo$/i.test(m.text) ) {
    let av = './src/mp3/loo.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^love$/i.test(m.text) ) {
    let av = './src/mp3/love.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^love u$/i.test(m.text) ) {
    let av = './src/mp3/love u.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^lover$/i.test(m.text) ) {
    let av = './src/mp3/lover.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^lubu$/i.test(m.text) ) {
    let av = './src/mp3/lubu.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^lucifer$/i.test(m.text) ) {
    let av = './src/mp3/lucifer.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^machan$/i.test(m.text) ) {
    let av = './src/mp3/machan.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^mad$/i.test(m.text) ) {
    let av = './src/mp3/mad.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Malang$/i.test(m.text) ) {
    let av = './src/mp3/Malang.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^mindalle$/i.test(m.text) ) {
    let av = './src/mp3/mindalle.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^mindathe$/i.test(m.text) ) {
    let av = './src/mp3/mindathe.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Mohanlal$/i.test(m.text) ) {
    let av = './src/mp3/Mohanlal.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Mood$/i.test(m.text) ) {
    let av = './src/mp3/Mood.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^moodesh$/i.test(m.text) ) {
    let av = './src/mp3/moodesh.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^moonji$/i.test(m.text) ) {
    let av = './src/mp3/moonji.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Music pranthan$/i.test(m.text) ) {
    let av = './src/mp3/Music pranthan.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^music$/i.test(m.text) ) {
    let av = './src/mp3/music.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Muth$/i.test(m.text) ) {
    let av = './src/mp3/Muth.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Muthe$/i.test(m.text) ) {
    let av = './src/mp3/Muthe.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^my area$/i.test(m.text) ) {
    let av = './src/mp3/my area.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^my god$/i.test(m.text) ) {
    let av = './src/mp3/my god.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^my love$/i.test(m.text) ) {
    let av = './src/mp3/my love.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^my bro$/i.test(m.text) ) {
    let av = './src/mp3/my bro.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^myr$/i.test(m.text) ) {
    let av = './src/mp3/myr.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^myre$/i.test(m.text) ) {
    let av = './src/mp3/myre.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Nalla kutty$/i.test(m.text) ) {
    let av = './src/mp3/Nalla kutty.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Nallakutti$/i.test(m.text) ) {
    let av = './src/mp3/Nallakutti.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Name$/i.test(m.text) ) {
    let av = './src/mp3/Name.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^nanban$/i.test(m.text) ) {
    let av = './src/mp3/nanban.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Nanbiye$/i.test(m.text) ) {
    let av = './src/mp3/Nanbiye.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^nanni$/i.test(m.text) ) {
    let av = './src/mp3/nanni.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^neymar$/i.test(m.text) ) {
    let av = './src/mp3/neymar.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^neymer$/i.test(m.text) ) {
    let av = './src/mp3/neymer.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^Nirthada$/i.test(m.text) ) {
    let av = './src/mp3/Nirthada.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^noob$/i.test(m.text) ) {
    let av = './src/mp3/noob.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^oh no$/i.test(m.text) ) {
    let av = './src/mp3/oh no.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ok$/i.test(m.text) ) {
    let av = './src/mp3/ok.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^bei$/i.test(m.text) ) {
    let av = './src/mp3/bei.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^oh$/i.test(m.text) ) {
    let av = './src/mp3/oh.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ok bye$/i.test(m.text) ) {
    let av = './src/mp3/ok bye.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^ok da$/i.test(m.text) ) {
    let av = './src/mp3/ok da.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^oombi$/i.test(m.text) ) {
    let av = './src/mp3/oombi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
if (/^over$/i.test(m.text) ) {
    let av = './src/mp3/over.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
   
   
return !0
 }
 
export default handler
