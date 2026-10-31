/* Nội dung bài khóa trong sách (课文), mỗi bài khóa theo thứ tự: 生词 → 课文 → 小语讲堂.
   Thêm bài mới: thêm một khóa số bài vào window.LESSON_TEXTS theo đúng cấu trúc của bài 6. */
window.LESSON_TEXTS = {
  "6": {
    speakers: { '白家月': ['月', 'a', 'Bạch Gia Nguyệt'], '李文': ['文', 'b', 'Lý Văn'], '护士': ['护', 'c', 'Y tá'] },
    /* File nghe trong thư mục audio/, theo từng bài khóa: [bài khóa, từ mới] */
    audio: [['6-1', '6-2'], ['6-3', '6-4'], ['6-5', '6-6'], ['6-7', '6-8']],
    /* Hình minh hoạ trong thư mục images/, hiện bên phải bài khóa: [đường dẫn, mô tả] */
    images: [
      [['images/l6-t1-om.webp', 'Cô gái bị ốm nằm trên giường, tay đặt lên trán']],
      [['images/l6-t2-quay-y-ta.png', 'Y tá hướng dẫn bệnh nhân ở quầy sảnh bệnh viện']],
      [['images/l6-t3-cam.png', 'Cô gái bị cảm cúm quấn chăn, hắt hơi'], ['images/l6-t3-tiem.webp', 'Tiêm vào cánh tay']],
      [['images/l6-t4.avif', 'Khám bệnh tại bệnh viện ở Trung Quốc']]
    ],
    texts: [
      { kind:'Hội thoại',
        ctx:['在家里，白家月躺在床上给李文打电话。','Ở nhà, Bạch Gia Nguyệt nằm trên giường gọi điện cho Lý Văn.'],
        words:[[1,'咳嗽','késou','v.','ho'],[2,'咳','ké','v.','ho'],[3,'厉害','lìhai','adj.','dữ dội, ghê gớm'],[4,'严重','yánzhòng','adj.','nghiêm trọng'],
               [5,'赶快','gǎnkuài','adv.','mau, nhanh chóng'],[6,'陪','péi','v.','đi cùng, ở bên'],[7,'翻译','fānyì','v./n.','phiên dịch; người phiên dịch']],
        lines:[
          ['白家月','喂，李文，我身体不舒服。','Wéi, Lǐ Wén, wǒ shēntǐ bù shūfu.','Alô, Lý Văn, mình thấy trong người không khỏe.'],
          ['李文','你怎么了？听你的声音，好像感冒了。','Nǐ zěnme le? Tīng nǐ de shēngyīn, hǎoxiàng gǎnmào le.','Bạn sao thế? Nghe giọng bạn thì hình như bị cảm rồi.'],
          ['白家月','对，我还发烧，一直咳嗽，咳得很厉害。','Duì, wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.','Ừ, mình còn bị sốt, ho suốt, ho dữ lắm.'],
          ['李文','那挺严重的，最好赶快去医院检查一下。','Nà tǐng yánzhòng de, zuìhǎo gǎnkuài qù yīyuàn jiǎnchá yíxià.','Thế thì khá nghiêm trọng đấy, tốt nhất là mau đến bệnh viện kiểm tra.'],
          ['白家月','我也这么想，不过我来中国后还没去过医院，不知道怎么在中国的医院看病。','Wǒ yě zhème xiǎng, búguò wǒ lái Zhōngguó hòu hái méi qùguo yīyuàn, bù zhīdào zěnme zài Zhōngguó de yīyuàn kànbìng.','Mình cũng nghĩ vậy, nhưng từ khi sang Trung Quốc mình chưa đi bệnh viện lần nào, không biết khám bệnh ở bệnh viện Trung Quốc thế nào.'],
          ['李文','没关系，我陪你一起去，还能帮你翻译。你在家等一下，我现在就去接你。','Méi guānxi, wǒ péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì. Nǐ zài jiā děng yíxià, wǒ xiànzài jiù qù jiē nǐ.','Không sao, mình đi cùng bạn, còn phiên dịch giúp bạn được. Bạn ở nhà đợi chút, mình qua đón bạn ngay.'],
          ['白家月','太好了！有你陪着，我就放心多了。','Tài hǎo le! Yǒu nǐ péizhe, wǒ jiù fàngxīn duō le.','Tốt quá! Có bạn đi cùng, mình yên tâm hơn nhiều rồi.']],
        gram:{ no:1, zh:'形容词“厉害”', vi:'Tính từ “厉害”',
          note:'“厉害” đặt sau động từ hoặc tính từ để chỉ mức độ rất cao.',
          f:['Động từ + 得 + (phó từ) + 厉害','Tính từ + 得 + 厉害'], mark:'得很?厉害',
          hints:['刮风','咳嗽','肚子疼'],
          ex:[['我还发烧，一直咳嗽，咳得很厉害。','Wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.','Mình còn bị sốt, ho suốt, ho dữ lắm.'],
              ['我昨天跑步跑多了，今天腿疼得厉害。','Wǒ zuótiān pǎobù pǎo duō le, jīntiān tuǐ téng de lìhai.','Hôm qua mình chạy bộ nhiều quá, hôm nay chân đau dữ lắm.'],
              ['这道菜辣得厉害，我吃了一口就不敢再吃了。','Zhè dào cài là de lìhai, wǒ chīle yì kǒu jiù bù gǎn zài chī le.','Món này cay khủng khiếp, mình ăn một miếng là không dám ăn nữa.']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：外面刮风了，咱们是现在走还是过一会儿再走？','B：我看____，咱们等会儿再走吧。'],
                 ['A：我已经咳嗽好几天了，今天还有点儿发烧。','B：我看你____，快去医院看看吧。'],
                 ['A：你怎么了？哪儿不舒服吗？','B：我刚吃完冰激凌，现在____。']] } },
      { kind:'Hội thoại',
        ctx:['在医院大厅，李文帮白家月办理看病手续。','Ở sảnh bệnh viện, Lý Văn giúp Bạch Gia Nguyệt làm thủ tục khám bệnh.'],
        words:[[8,'护士','hùshi','n.','y tá'],[9,'表','biǎo','n.','mẫu đơn; bảng'],[10,'性别','xìngbié','n.','giới tính'],[11,'国籍','guójí','n.','quốc tịch'],
               [12,'家庭','jiātíng','n.','gia đình'],[13,'地址','dìzhǐ','n.','địa chỉ'],[14,'挂号','guàhào','v.','đăng ký khám, lấy số'],[15,'排队','páiduì','v.','xếp hàng'],[16,'大厅','dàtīng','n.','sảnh']],
        lines:[
          ['李文','护士，您好，我的这位外国朋友生病了，第一次来这里看病，需要怎么做？','Hùshi, nín hǎo, wǒ de zhè wèi wàiguó péngyou shēngbìng le, dì yī cì lái zhèlǐ kànbìng, xūyào zěnme zuò?','Chào chị y tá, người bạn nước ngoài này của tôi bị ốm, lần đầu đến đây khám, cần làm thế nào ạ?'],
          ['护士','请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。','Qǐng zài zhè zhāng biǎo shang xiěshang bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.','Anh ghi vào tờ đơn này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân nhé.'],
          ['李文','我写好了，您看看，这样可以吗？','Wǒ xiěhǎo le, nín kànkan, zhèyàng kěyǐ ma?','Tôi viết xong rồi, chị xem giúp, thế này được chưa ạ?'],
          ['护士','没问题，您拿着病人的护照去挂号吧。','Méi wèntí, nín názhe bìngrén de hùzhào qù guàhào ba.','Được rồi, anh cầm hộ chiếu của bệnh nhân đi đăng ký khám nhé.'],
          ['李文','家月，我去排队挂号，你先在大厅休息，别着急。','Jiāyuè, wǒ qù páiduì guàhào, nǐ xiān zài dàtīng xiūxi, bié zháojí.','Gia Nguyệt, mình đi xếp hàng lấy số, bạn ngồi nghỉ ở sảnh trước đi, đừng sốt ruột.'],
          ['白家月','好的，真是太谢谢你了！','Hǎo de, zhēnshi tài xièxie nǐ le!','Ừ, thật sự cảm ơn bạn nhiều lắm!'],
          ['李文','你跟我有什么好客气的。','Nǐ gēn wǒ yǒu shénme hǎo kèqi de.','Với mình thì có gì mà phải khách sáo.']],
        gram:{ no:2, zh:'固定格式“（没）有什么（好）×的”', vi:'Cấu trúc cố định “（没）有什么（好）×的”',
          note:'Biểu thị không cần thiết phải làm việc gì đó, hoặc không có cảm giác, trạng thái nào đó.',
          f:['(没)有什么(好) + Động từ / Tính từ + 的'], mark:'(?:没)?有什么(?:好)?\\S*?的(?=。)',
          hints:['打扫','担心','怕'],
          ex:[['你跟我有什么好客气的。','Nǐ gēn wǒ yǒu shénme hǎo kèqi de.','Với mình thì có gì mà phải khách sáo.'],
              ['这种事在网上有很多，没有什么奇怪的。','Zhè zhǒng shì zài wǎng shang yǒu hěn duō, méiyǒu shénme qíguài de.','Chuyện này trên mạng nhiều lắm, chẳng có gì lạ cả.'],
              ['我觉得这家商场里的东西都很一般，没有什么好买的。','Wǒ juéde zhè jiā shāngchǎng li de dōngxi dōu hěn yìbān, méiyǒu shénme hǎo mǎi de.','Mình thấy đồ trong trung tâm thương mại này đều bình thường, chẳng có gì đáng mua.']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：你怎么这么快就打扫完房间了？','B：前天刚打扫过，还很干净，____。'],
                 ['A：你的病严重吗？我特别担心。','B：放心吧，我得的只是小感冒，____。'],
                 ['A：你敢一个人看这个电影吗？我陪你一起看吧。','B：谢谢你，____。']] } },
      { kind:'Đoạn văn', title:['一次看病的经历','Yí cì kànbìng de jīnglì','Một lần đi khám bệnh'],
        words:[[17,'偶尔','ǒu\'ěr','adv./adj.','thỉnh thoảng'],[18,'身','shēn','n./m.','cơ thể; bộ (quần áo)'],[19,'结果','jiéguǒ','n./conj.','kết quả; kết cục là'],
               [20,'性','xìng','suf.','tính (hậu tố chỉ tính chất, phạm vi)'],[21,'体温','tǐwēn','n.','nhiệt độ cơ thể'],[22,'降','jiàng','v.','hạ, giảm'],[23,'光','guāng','adv.','chỉ, mỗi'],
               [24,'打针','dǎzhēn','v.','tiêm'],[25,'有效','yǒuxiào','v.','có hiệu quả'],[26,'按时','ànshí','adv.','đúng giờ'],[27,'汗','hàn','n.','mồ hôi'],
               [28,'醒','xǐng','v.','tỉnh dậy, thức dậy'],[29,'感觉','gǎnjué','v./n.','cảm thấy; cảm giác'],[30,'低','dī','adj.','thấp'],[31,'难受','nánshòu','adj.','khó chịu']],
        paras:[
          [['下午白家月去看病了，她告诉医生，自己平时身体不错，偶尔才会生一次病。','Xiàwǔ Bái Jiāyuè qù kànbìng le, tā gàosu yīshēng, zìjǐ píngshí shēntǐ búcuò, ǒu\'ěr cái huì shēng yí cì bìng.','Buổi chiều Bạch Gia Nguyệt đi khám bệnh. Cô ấy nói với bác sĩ rằng bình thường mình khá khỏe, thỉnh thoảng mới ốm một lần.'],
           ['这次她病得很厉害，头也一直疼，身上一点儿力气都没有。','Zhè cì tā bìng de hěn lìhai, tóu yě yìzhí téng, shēn shang yìdiǎnr lìqi dōu méiyǒu.','Lần này cô ấy ốm rất nặng, đầu cũng đau suốt, người không còn chút sức lực nào.'],
           ['医生给她做了检查，检查结果出来后，发现她得了比较严重的流行性感冒。','Yīshēng gěi tā zuòle jiǎnchá, jiǎnchá jiéguǒ chūlai hòu, fāxiàn tā déle bǐjiào yánzhòng de liúxíngxìng gǎnmào.','Bác sĩ khám cho cô ấy. Khi có kết quả, bác sĩ phát hiện cô ấy bị cúm khá nặng.']],
          [['医生告诉她，现在需要把体温降下来，光吃药恐怕不够，打针会更有效。','Yīshēng gàosu tā, xiànzài xūyào bǎ tǐwēn jiàng xiàlai, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.','Bác sĩ nói bây giờ cần hạ nhiệt độ cơ thể xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn.'],
           ['医生还让她回家以后按时吃药，多喝水，多休息。','Yīshēng hái ràng tā huí jiā yǐhòu ànshí chī yào, duō hē shuǐ, duō xiūxi.','Bác sĩ còn dặn cô ấy về nhà uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi nhiều.']],
          [['晚上，白家月睡觉时出了一身汗。','Wǎnshang, Bái Jiāyuè shuìjiào shí chūle yì shēn hàn.','Buổi tối, lúc ngủ Bạch Gia Nguyệt ra mồ hôi khắp người.'],
           ['第二天醒来时，她感觉头不那么疼了，体温也低了一些，身体不那么难受了。','Dì-èr tiān xǐnglái shí, tā gǎnjué tóu bú nàme téng le, tǐwēn yě dīle yìxiē, shēntǐ bú nàme nánshòu le.','Hôm sau tỉnh dậy, cô ấy thấy đầu không còn đau như trước, nhiệt độ cũng hạ bớt, người không còn khó chịu như thế nữa.']]],
        gram:{ no:3, zh:'频率副词“偶尔”', vi:'Phó từ tần suất “偶尔”',
          note:'“偶尔” biểu thị hành động hoặc tình huống xảy ra rất ít lần.',
          f:['偶尔 + (才 / 会) + Động từ'], mark:'偶尔(?:才|会)?',
          hints:['自行车','甜','商场'],
          ex:[['她告诉医生，自己平时身体不错，偶尔才会生一次病。','Tā gàosu yīshēng, zìjǐ píngshí shēntǐ búcuò, ǒu\'ěr cái huì shēng yí cì bìng.','Cô ấy nói với bác sĩ rằng bình thường mình khá khỏe, thỉnh thoảng mới ốm một lần.'],
              ['他经常在家看电影，偶尔才去电影院看。','Tā jīngcháng zài jiā kàn diànyǐng, ǒu\'ěr cái qù diànyǐngyuàn kàn.','Anh ấy hay xem phim ở nhà, thỉnh thoảng mới ra rạp xem.'],
              ['我一般都在学校食堂吃饭，偶尔会跟朋友一起出去吃。','Wǒ yìbān dōu zài xuéxiào shítáng chīfàn, ǒu\'ěr huì gēn péngyou yìqǐ chūqu chī.','Mình thường ăn ở căng tin trường, thỉnh thoảng đi ăn ngoài với bạn.']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['我一般坐公交车，____来学校。'],['我喜欢吃辣的菜，不过____。'],['我一般在网上买东西，____。']] } },
      { kind:'Đoạn văn', title:['怎么在中国看病','Zěnme zài Zhōngguó kànbìng','Đi khám bệnh ở Trung Quốc như thế nào'],
        words:[[32,'通','tōng','v.','thông, hiểu'],[33,'过程','guòchéng','n.','quá trình'],[34,'部','bù','n.','khoa, bộ phận'],[35,'收费','shōufèi','v.','thu phí'],
               [36,'情况','qíngkuàng','n.','tình hình, tình trạng'],[37,'好','hǎo','v.','để (mà)'],[38,'治疗','zhìliáo','v.','điều trị'],[39,'步','bù','n.','bước']],
        paras:[
          [['外国人第一次在中国看病，可能会担心语言不通，或者觉得看病的过程和自己的国家不同。','Wàiguó rén dì yī cì zài Zhōngguó kànbìng, kěnéng huì dānxīn yǔyán bù tōng, huòzhě juéde kànbìng de guòchéng hé zìjǐ de guójiā bùtóng.','Người nước ngoài lần đầu khám bệnh ở Trung Quốc có thể lo không hiểu ngôn ngữ, hoặc thấy quy trình khám khác với nước mình.'],
           ['其实，这些问题都有办法解决。','Qíshí, zhèxiē wèntí dōu yǒu bànfǎ jiějué.','Thật ra những vấn đề này đều có cách giải quyết.']],
          [['有的医院有国际部，那里的医生一般会说英文，交流比较方便，但是国际部的收费比较高。','Yǒu de yīyuàn yǒu guójìbù, nàlǐ de yīshēng yìbān huì shuō Yīngwén, jiāoliú bǐjiào fāngbiàn, dànshì guójìbù de shōufèi bǐjiào gāo.','Có bệnh viện có khoa quốc tế, bác sĩ ở đó thường nói được tiếng Anh, giao tiếp khá tiện, nhưng khoa quốc tế thu phí khá cao.'],
           ['如果没有特别需要，可以选择普通部，用简单的中文和医生交流。','Rúguǒ méiyǒu tèbié xūyào, kěyǐ xuǎnzé pǔtōngbù, yòng jiǎndān de Zhōngwén hé yīshēng jiāoliú.','Nếu không có nhu cầu đặc biệt, có thể chọn khoa thường và nói chuyện với bác sĩ bằng tiếng Trung đơn giản.']],
          [['在中国看病要先挂号，然后再去找医生。','Zài Zhōngguó kànbìng yào xiān guàhào, ránhòu zài qù zhǎo yīshēng.','Khám bệnh ở Trung Quốc phải đăng ký lấy số trước, sau đó mới đến gặp bác sĩ.'],
           ['医生会问病人的情况，有时还会做一些检查，好给出合适的治疗方法。','Yīshēng huì wèn bìngrén de qíngkuàng, yǒushí hái huì zuò yìxiē jiǎnchá, hǎo gěichū héshì de zhìliáo fāngfǎ.','Bác sĩ sẽ hỏi tình trạng của bệnh nhân, có khi còn làm một số xét nghiệm để đưa ra cách điều trị phù hợp.'],
           ['只要按照医生说的一步一步来，一般都可以顺利得到治疗。','Zhǐyào ànzhào yīshēng shuō de yí bù yí bù lái, yìbān dōu kěyǐ shùnlì dédào zhìliáo.','Chỉ cần làm theo lời bác sĩ từng bước một, thường đều được điều trị suôn sẻ.']]],
        gram:{ no:4, zh:'目的复句“……，好……”', vi:'Câu phức chỉ mục đích “……，好……”',
          note:'Vế trước nêu một hành động hoặc tình huống, vế sau (bắt đầu bằng “好”) nêu mục đích của nó.',
          f:['Vế 1 (hành động / tình huống)，好 + Động từ (mục đích)'], mark:'好(?=给出|做出|联系)',
          hints:['放心','面试','旅行'],
          ex:[['医生有时还会做一些检查，好给出合适的治疗方法。','Yīshēng yǒushí hái huì zuò yìxiē jiǎnchá, hǎo gěichū héshì de zhìliáo fāngfǎ.','Bác sĩ có khi còn làm một số xét nghiệm để đưa ra cách điều trị phù hợp.'],
              ['你们先了解一下情况，好做出决定。','Nǐmen xiān liǎojiě yíxià qíngkuàng, hǎo zuòchū juédìng.','Các bạn tìm hiểu tình hình trước đã, để còn đưa ra quyết định.'],
              ['我把电话号码告诉你，以后有什么事好联系我。','Wǒ bǎ diànhuà hàomǎ gàosu nǐ, yǐhòu yǒu shénme shì hǎo liánxì wǒ.','Mình cho bạn số điện thoại, sau này có việc gì thì tiện liên lạc với mình.']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['我每天都给家人打电话，____。'],['你要早点儿准备好材料，____。'],['我今天就把工作做完，明天____。']] } }
    ]
  },

  "7": {
    speakers: { '王一雪': ['雪', 'a', 'Vương Nhất Tuyết'], '杨同乐': ['乐', 'b', 'Dương Đồng Lạc'], '同事': ['同', 'c', 'Đồng nghiệp'] },
    audio: [['7-1', '7-2'], ['7-3', '7-4'], ['7-5', '7-6'], ['7-7', '7-8']],
    images: [
      [['images/l7-t1.jpg', 'Trao đổi công việc với quản lý trong văn phòng']],
      [['images/l7-t2-cong-tac.jpg', 'Đồng nghiệp kéo vali đi công tác ở sân bay']],
      [['images/l7-t3.jpg', 'Bắt tay chốt hợp đồng']],
      [['images/l7-t4.jpg', 'Nhóm nhân viên trẻ cùng học hỏi bên máy tính']]
    ],
    texts: [
      { kind:'Hội thoại',
        ctx:['在王一雪办公室，同事向她汇报工作。'],
        words:[[1,'打扰','dǎrǎo','v.','làm phiền'],[2,'市场','shìchǎng','n.','thị trường'],[3,'调查','diàochá','v.','điều tra, khảo sát'],[4,'计划','jìhuà','n./v.','kế hoạch; lên kế hoạch'],
               [5,'内容','nèiróng','n.','nội dung'],[6,'改','gǎi','v.','sửa, thay đổi'],[7,'细心','xìxīn','adj.','cẩn thận, tỉ mỉ'],[8,'客户','kèhù','n.','khách hàng'],
               [9,'真正','zhēnzhèng','adj./adv.','thật sự'],[10,'想法','xiǎngfǎ','n.','suy nghĩ, ý tưởng'],[11,'任务','rènwu','n.','nhiệm vụ'],[12,'及时','jíshí','adv./adj.','kịp thời']],
        lines:[
          ['同事','经理，打扰您一下。市场调查的计划书我昨天发到您邮箱了。在内容方面，您觉得有需要改的吗？'],
          ['王一雪','我看过了，写得不错，就是调查的地点只有超市，不太够。'],
          ['同事','好的，那我再加一些网店。'],
          ['王一雪','行。做调查的时候要细心，注意了解客户真正的想法。'],
          ['同事','明白了，我会认真准备，按时完成任务。'],
          ['王一雪','嗯，如果遇到什么问题，及时跟我联系。']],
        gram:{ no:1, zh:'固定格式“在……方面”', vi:'Cấu trúc cố định “在……方面”',
          note:'Dùng để giới hạn phạm vi hoặc lĩnh vực đang bàn đến (về mặt…).',
          f:['在 + Danh từ / Động từ + 方面，…'], mark:'在[^，。？]*?方面',
          hints:['收费','出行','学习'],
          ex:[['在内容方面，您觉得有需要改的吗？'],['在时间安排方面，你可以再想一想。'],['他才来中国两个月，在生活方面，还不太习惯。']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：你建议我去医院的国际部看病吗？','B：____。'],
                 ['A：为什么现在很多人都喜欢骑电动车？','B：____。'],
                 ['A：老师，我儿子最近在学校的表现怎么样？','B：____。']] } },
      { kind:'Hội thoại',
        ctx:['在公司，同事向杨同乐征求建议。'],
        words:[[13,'出差','chūchāi','v.','đi công tác'],[14,'经验','jīngyàn','n.','kinh nghiệm'],[15,'采访','cǎifǎng','v.','phỏng vấn'],[16,'产品','chǎnpǐn','n.','sản phẩm'],
               [17,'看法','kànfǎ','n.','quan điểm, cách nhìn'],[18,'提前','tíqián','v.','làm trước, sớm hơn'],[19,'便于','biànyú','v.','tiện cho'],[20,'既然','jìrán','conj.','đã… thì']],
        lines:[
          ['同事','杨哥，经理让我下周去上海出差，做市场调查，你有这方面的经验吗？'],
          ['杨同乐','你要去几天？主要调查什么内容？'],
          ['同事','去四天，打算采访一些客户，了解他们对新产品的看法。'],
          ['杨同乐','那你要提前准备好问题，便于和客户交流。'],
          ['同事','好的，我已经准备了一些问题。'],
          ['杨同乐','很好。既然出差时间不长，就要安排好时间，多获得有用的信息。']],
        gram:{ no:2, zh:'因果复句“既然……，就……”', vi:'Câu phức nhân quả “既然……，就……”',
          note:'Vế trước nêu tiền đề (điều đã chắc chắn), vế sau nêu kết luận rút ra từ tiền đề đó.',
          f:['既然 + Tiền đề，(Chủ ngữ) + 就 + Kết luận'], mark:'既然|就',
          hints:['回家休息','在家','换工作'],
          ex:[['既然出差时间不长，就要安排好时间，多获得有用的信息。'],['既然大家都同意，我们就这么做吧。'],['既然你们已经决定了，就不要再改了。']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：老师，我有点儿不舒服。','B：____，____。'],
                 ['A：外面下雨了，咱们还出去吗？','B：____，____。'],
                 ['A：我觉得这个工作没什么发展机会。','B：____，____。']] } },
      { kind:'Đoạn văn', title:['不同客户，不同方法'],
        words:[[21,'谈','tán','v.','bàn bạc, nói chuyện'],[22,'笔','bǐ','m.','khoản, vụ (tiền, làm ăn)'],[23,'生意','shēngyi','n.','việc làm ăn, kinh doanh'],[24,'困难','kùnnan','n./adj.','khó khăn'],
               [25,'优点','yōudiǎn','n.','ưu điểm'],[26,'缺点','quēdiǎn','n.','khuyết điểm'],[27,'实际','shíjì','adj./n.','thực tế'],[28,'效果','xiàoguǒ','n.','hiệu quả'],
               [29,'点','diǎn','n.','điểm'],[30,'一下','yíxià','adv.','ngay lập tức']],
        paras:[
          [['前段时间，杨同乐的同事谈成了一笔不错的生意。刚开始，这位同事也遇到了一些困难。拿和客户交流来说，虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。杨同乐告诉她，这是因为她介绍的方式都一样。其实，不同年龄、不同性别的客户对产品的关注点是不一样的。']],
          [['于是，这位同事又认真地进行了几次市场调查，了解不同客户的想法。后来她在面对不同客户时，能根据他们的情况介绍产品，效果一下就好了很多。']]],
        gram:{ no:3, zh:'固定格式“拿……来说”', vi:'Cấu trúc cố định “拿……来说”',
          note:'Dùng để đưa ra một phương diện hoặc ví dụ cụ thể (lấy … làm ví dụ).',
          f:['拿 + Ví dụ cụ thể + 来说，…'], mark:'拿[^，。]*?来说',
          hints:['环境','网购','学习'],
          ex:[['拿和客户交流来说，虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。'],['现在的生活很方便。拿购物来说，人们不出门就能买到想要的东西。'],['在中国，南北方的生活习惯不同。拿吃饭来说，一般南方人更爱吃米饭。']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['我很喜欢这个小区。____。'],['现在快递的速度很快。____。'],['我们班同学之间经常互相帮助。____。']] } },
      { kind:'Đoạn văn', title:['工作的选择与发展'],
        words:[[31,'份','fèn','m.','phần, bản (lượng từ)'],[32,'积累','jīlěi','v.','tích lũy'],[33,'使','shǐ','v.','khiến, làm cho'],[34,'进入','jìnrù','v.','đi vào, bước vào'],
               [35,'社会','shèhuì','n.','xã hội'],[36,'管理','guǎnlǐ','v.','quản lý'],[37,'基础','jīchǔ','n.','nền tảng'],[38,'能力','nénglì','n.','năng lực'],[39,'今后','jīnhòu','n.','sau này, từ nay về sau']],
        paras:[
          [['有的年轻人经常换工作，总觉得下一份工作会更好。但是，适应新工作往往需要比较长的时间。如果总是换工作，不但很难积累经验，还可能会使自己的发展受到影响。']],
          [['我认为，年轻人刚进入社会时，不能只关心工资的高低，更要重视学习。比如，学习课本中没有的专业知识，了解公司的管理方式，学会和同事有效交流，等等。只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。']]],
        gram:{ no:4, zh:'兼语句“主语+使+宾语+动词短语”', vi:'Câu kiêm ngữ “Chủ ngữ + 使 + Tân ngữ + Cụm động từ”',
          note:'Diễn tả một tình huống hoặc nguyên nhân khiến người hay sự vật thay đổi, hoặc tạo ra kết quả nào đó.',
          f:['Chủ ngữ + 使 + Tân ngữ + Động từ / Tính từ'], mark:'使',
          hints:['关系','身体','客户'],
          ex:[['如果总是换工作，可能会使自己的发展受到影响。'],['这个新方法使工作变得更加简单了。'],['参加这些交流活动使留学生更快适应了大学生活。']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['和同事多交流____。'],['长时间不休息____。'],['这次市场调查____。']] } }
    ]
  },

  "8": {
    speakers: { '安妮': ['妮', 'a', 'Annie'], '白家月': ['月', 'b', 'Bạch Gia Nguyệt'], '李文': ['文', 'a', 'Lý Văn'], '杨同乐': ['乐', 'b', 'Dương Đồng Lạc'] },
    audio: [['8-1', '8-2'], ['8-3', '8-4'], ['8-5', '8-6'], ['8-7', '8-8']],
    images: [
      [['images/l8-t1.jpg', 'Hai người ngồi nghỉ trên Vạn Lý Trường Thành']],
      [['images/l8-t2.jpg', 'Nhân viên tăng ca mệt mỏi bên chồng tài liệu']],
      [['images/l8-t3.jpg', 'Đi dạo giữa thiên nhiên để thư giãn']],
      [['images/l8-t4.jpg', 'Tượng sư tử đồng ở Cố Cung']]
    ],
    texts: [
      { kind:'Hội thoại',
        ctx:['周五晚上，安妮给白家月打电话。'],
        words:[[1,'紧张','jǐnzhāng','adj.','căng thẳng; khan hiếm'],[2,'放松','fàngsōng','v.','thư giãn'],[3,'呀','yā','int.','ơ, ồ (thán từ)'],[4,'不管','bùguǎn','conj.','bất kể'],
               [5,'郊区','jiāoqū','n.','ngoại ô'],[6,'游玩','yóuwán','v.','đi chơi, du ngoạn'],[7,'主意','zhǔyi','n.','ý kiến, chủ ý'],[8,'外出','wàichū','v.','ra ngoài'],
               [9,'戴','dài','v.','đội, đeo'],[10,'帽子','màozi','n.','mũ'],['专名','长城','Chángchéng','Danh từ riêng','Vạn Lý Trường Thành']],
        lines:[
          ['安妮','家月，最近学习太紧张了，咱们明天出去放松放松吧。'],
          ['白家月','呀，正好我也想出去呢。咱们去哪儿好呢？'],
          ['安妮','不管去哪儿，能放松的地方都行。'],
          ['白家月','郊区怎么样？'],
          ['安妮','天中说，下周王老师要带咱们去郊区游玩呢。'],
          ['白家月','是吗？那咱们明天去爬长城吧，不是说“不到长城非好汉”吗？'],
          ['安妮','好主意！不过明天是个大晴天，外出记得戴帽子。']],
        gram:{ no:1, zh:'条件复句“不管……，都/也……”', vi:'Câu phức điều kiện “不管……，都/也……”',
          note:'Vế trước nêu điều kiện có thể thay đổi, vế sau cho biết kết quả vẫn không đổi. Vế 不管 phải có từ để hỏi hoặc cách nói lựa chọn (A还是B, V不V).',
          f:['不管 + Điều kiện / Tình huống，(Chủ ngữ) + 都 / 也 + Kết quả'], mark:'不管|都|也',
          hints:['租','下雨','多晚'],
          ex:[['不管去哪儿，能放松的地方都行。'],['不管有什么想法，你都要说出来，让我们知道。'],['不管遇到多大困难，我们也要坚持，最后一定能完成任务。']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：这个房子不太大，你还租吗？','B：不管这个房子大还是小，我____，因为这里离我的公司最近。'],
                 ['A：外边雨特别大，你们还去看电影吗？','B：票都买了，所以____，我们都____。'],
                 ['A：时间不早了，你还要回家吃晚饭吗？','B：____，____。']] } },
      { kind:'Hội thoại',
        ctx:['周末，李文、杨同乐等人去郊区游玩。'],
        words:[[11,'项目','xiàngmù','n.','dự án'],[12,'加班','jiābān','v.','tăng ca'],[13,'熬夜','áoyè','v.','thức khuya'],[14,'否则','fǒuzé','conj.','nếu không thì'],
               [15,'失去','shīqù','v.','mất đi'],[16,'值得','zhídé','v.','đáng, xứng đáng'],[17,'暂停','zàntíng','v.','tạm dừng'],[18,'之后','zhīhòu','n.','sau khi, sau đó'],[19,'风景','fēngjǐng','n.','phong cảnh']],
        lines:[
          ['李文','同乐哥，你们平时工作忙吗？'],
          ['杨同乐','挺忙的。以前我总觉得年轻时要多学多干，所以参加了公司里的很多项目，经常加班、熬夜，身体也亮起了红灯。'],
          ['李文','还是别给自己太大压力，否则，失去健康就不值得了。'],
          ['杨同乐','是啊，后来我就不接那么多项目了。我发现暂停下来、好好休息之后，我能把工作做得更快更好。'],
          ['李文','对，该工作时就工作，该放松时就要放松。'],
          ['杨同乐','是的，现在我周末常来郊区，在好山好水好风景中放松自己。']],
        gram:{ no:2, zh:'假设复句“……，否则……”', vi:'Câu phức giả thiết “……，否则……”',
          note:'Vế trước nêu yêu cầu, lời khuyên hoặc điều kiện; vế sau nói hậu quả sẽ xảy ra nếu điều ở vế trước không được thực hiện (nếu không thì…).',
          f:['Yêu cầu / Lời khuyên，否则 + Hậu quả'], mark:'否则',
          hints:['病','来不及','肚子疼'],
          ex:[['还是别给自己太大压力，否则，失去健康就不值得了。'],['今晚早点儿睡吧，否则明天早上起不来，又该迟到了。'],['吃不完的菜要放进冰箱，否则很容易坏。']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：妈妈，我不想吃药。','B：快吃吧，否则____。'],
                 ['A：你们一定要今天下午出发吗？','B：对，____。'],
                 ['A：咱们吃完饭就出去跑步吧。','B：刚吃完饭应该先休息半小时再运动，____。']] } },
      { kind:'Đoạn văn', title:['学会放松'],
        words:[[20,'效率','xiàolǜ','n.','hiệu suất'],[21,'下降','xiàjiàng','v.','giảm xuống'],[22,'相比','xiāngbǐ','v.','so sánh'],[23,'因此','yīncǐ','conj.','vì vậy'],
               [24,'提醒','tíxǐng','v.','nhắc nhở'],[25,'与','yǔ','prep./conj.','với; và'],[26,'大自然','dàzìrán','n.','thiên nhiên'],[27,'美丽','měilì','adj.','đẹp'],[28,'景色','jǐngsè','n.','cảnh sắc']],
        paras:[
          [['以前杨同乐总觉得自己年轻，就应该多学多干、积累经验。很多年轻人和他想法一样。但是，由于工作紧张，他们经常加班、熬夜，休息不够，结果工作效率下降，健康也受到了影响。']],
          [['现在越来越多的人认识到，跟一直加班相比，休息好了再工作，效率更高。因此，很多人开始做出改变，提醒自己减轻压力、多多放松。比如，杨同乐周末时或者与朋友们去郊区游玩，在大自然美丽的景色中好好放松自己；或者就在家里安安静静地看看书。休息好了，再回去上班时，心情愉快，工作效率也更高。']]],
        gram:{ no:3, zh:'比较句“跟……相比”', vi:'Câu so sánh “跟……相比”',
          note:'Cấu trúc dùng để so sánh. 跟 thường dùng trong khẩu ngữ, hoàn cảnh thân mật; văn viết và hoàn cảnh trang trọng thường dùng 与.',
          f:['跟 / 与 + A + 相比，B + …'], mark:'跟[^，。]*?相比',
          hints:['大自然','法律','工资'],
          ex:[['跟一直加班相比，休息好了再工作，效率更高。'],['跟读研究生相比，我更想直接工作。'],['跟用现金相比，手机支付更方便些。']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['跟在家里看电视相比，____。'],['____，我更爱读和历史有关的书。'],['____相比，第一份工作更重要的是积累经验。']] } },
      { kind:'Đoạn văn', title:['去哪儿放松好'],
        words:[[29,'首都','shǒudū','n.','thủ đô'],[30,'市区','shìqū','n.','nội thành'],[31,'眼前','yǎnqián','n.','trước mắt'],[32,'美景','měijǐng','n.','cảnh đẹp'],
               [33,'参观','cānguān','v.','tham quan'],[34,'景点','jǐngdiǎn','n.','điểm du lịch'],[35,'交通','jiāotōng','n.','giao thông'],[36,'乘坐','chéngzuò','v.','đi (xe, tàu…)'],
               [37,'十分','shífēn','adv.','rất'],[38,'实际上','shíjìshàng','adv.','thực tế là'],['专名','故宫','Gùgōng','Danh từ riêng','Cố Cung (Bắc Kinh)']],
        paras:[
          [['一到周末，很多人都喜欢外出游玩。你一般去哪里呢？']],
          [['我生活在中国的首都——北京。在北京，周末的时候，有人会在市区公园走走，看看眼前的美景；有人喜欢去参观长城、故宫等有名的景点，放松心情的同时，也能了解历史文化。北京交通很方便，所以我和家人更爱乘坐公交车去郊区，偶尔也会自己开车。郊区有山有水，还有很多农家乐，吃、玩、住都十分方便。']],
          [['在我看来，不管去哪里玩，实际上都是为了放松。也可以说，只要能放松，去哪儿都合适。']]],
        gram:{ no:4, zh:'固定短语“有A有B”', vi:'Cụm cố định “有A有B”',
          note:'A và B thường là từ một âm tiết (ít khi hai âm tiết), có nghĩa liên quan, gần nhau hoặc trái ngược nhau.',
          f:['有 + A + 有 + B'], mark:'有[一-龥]{1,2}?有[一-龥]{1,2}',
          hints:['红 / 绿','说 / 笑','苦 / 甜'],
          ex:[['郊区有山有水，还有很多农家乐。'],['超市里的苹果有大有小，有红有绿，看起来都非常好吃。'],['春天，公园里到处都是人，有男有女，有大人有孩子，特别热闹。']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['小花园里____，非常漂亮。'],['他们在一起____，特别开心。'],['每个人的生活都不是一直顺顺利利的，总是____。']] } }
    ]
  },

  "9": {
    speakers: { '李文': ['文', 'a', 'Lý Văn'], '白家月': ['月', 'b', 'Bạch Gia Nguyệt'], '王一雪': ['雪', 'b', 'Vương Nhất Tuyết'], '刘明': ['明', 'a', 'Lưu Minh'] },
    audio: [['9-1', '9-2'], ['9-3', '9-4'], ['9-5', '9-6'], ['9-7', '9-8']],
    images: [
      [['images/l9-t1.jpg', 'Lẵng hoa và bóng bay chúc mừng sinh nhật']],
      [['images/l9-t2.jpg', 'Vợ chồng ngồi trò chuyện trên ghế sofa']],
      [['images/l9-t3.jpg', 'Đồng nghiệp cười nói vui vẻ']],
      [['images/l9-t4.jpg', 'Hai người nắm tay nhau trước hoàng hôn']]
    ],
    texts: [
      { kind:'Hội thoại',
        ctx:['在餐馆里，李文给白家月过生日。'],
        words:[[1,'祝','zhù','v.','chúc'],[2,'巧克力','qiǎokèlì','n.','sô-cô-la'],[3,'感动','gǎndòng','adj./v.','cảm động'],[4,'浪漫','làngmàn','adj.','lãng mạn'],
               [5,'幽默','yōumò','adj.','hài hước'],[6,'耐心','nàixīn','adj./n.','kiên nhẫn; sự kiên nhẫn'],[7,'吸引','xīyǐn','v.','thu hút'],[8,'当时','dāngshí','n.','lúc đó'],
               [9,'错过','cuòguò','v.','bỏ lỡ'],[10,'幸运','xìngyùn','adj./n.','may mắn']],
        lines:[
          ['李文','家月，给你的，祝你生日快乐！'],
          ['白家月','啊，好漂亮的花！还有巧克力！你怎么知道我喜欢这个巧克力？'],
          ['李文','上次咱们去超市，看你拿起来看了看又放下了，我就记住了。'],
          ['白家月','好感动！我不说你也懂我在想什么，你真是细心又浪漫。其实刚认识不久，你的幽默与耐心就很吸引我，不过我当时也只把你当普通朋友。如果你没有一直找我聊天儿，我们可能就错过了。'],
          ['李文','我终于遇见了对的人，哪能错过呢？'],
          ['白家月','遇见你，我也觉得很幸运。']],
        gram:{ no:1, zh:'紧缩复句“不……也……”', vi:'Câu phức rút gọn “不……也……”',
          note:'Diễn tả dù trong điều kiện phủ định thì kết quả phía sau vẫn chắc chắn như vậy (dù không… cũng…). Thường dùng trong khẩu ngữ.',
          f:['(Chủ ngữ) + 不 + Động từ，(Chủ ngữ) + 也 + Kết quả'], mark:'不[一-龥]{1,3}?也',
          hints:['吃','查','困'],
          ex:[['我不说你也懂我在想什么。'],['他不复习也能考出好成绩。'],['我很清楚他为什么生气，不问我也知道。']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：昨天你怎么没吃晚饭？','B：我中午吃得太饱了，晚上____也不饿。'],
                 ['A：你不用查一下地址吗？','B：____，我上个月刚去过，还记得。'],
                 ['A：你中午不休息一会儿吗？','B：我早上喝了一杯咖啡，____。']] } },
      { kind:'Hội thoại',
        ctx:['在家里，王一雪和刘明谈论王一飞和杨同乐的婚姻。'],
        words:[[11,'幸福','xìngfú','adj./n.','hạnh phúc'],[12,'尽管','jǐnguǎn','conj.','mặc dù'],[13,'性格','xìnggé','n.','tính cách'],[14,'共同','gòngtóng','adj.','chung'],
               [15,'责任','zérèn','n.','trách nhiệm'],[16,'相互','xiānghù','adv.','lẫn nhau'],[17,'理解','lǐjiě','v.','thấu hiểu'],[18,'支持','zhīchí','v.','ủng hộ']],
        lines:[
          ['王一雪','看到一飞和同乐结婚后这么幸福，我这个介绍人也特别开心。'],
          ['刘明','是啊，同乐是你的好朋友，一飞是你妹妹，你都很了解。'],
          ['王一雪','嗯，他们尽管性格不同，但是有很多共同爱好。特别是同乐人好，性格也好，很有责任感。'],
          ['刘明','是的，一飞也算在对的时间遇到了对的人。后边的路还很长，希望他们能一直相互理解、相互支持。'],
          ['王一雪','我了解同乐，更了解一飞，相信他们会一直走下去的。'],
          ['刘明','祝他们越来越幸福。']],
        gram:{ no:2, zh:'转折复句“尽管……，但是/可是……”', vi:'Câu phức chuyển ý “尽管……，但是/可是……”',
          note:'尽管 nghĩa là “mặc dù”, nêu ra một sự thật; 但是 / 可是 dẫn ra tình huống hoặc kết quả ngược lại.',
          f:['尽管 + Sự thật，但是 / 可是 + Kết quả ngược lại'], mark:'尽管|但是|可是',
          hints:['聊得来','堵车','贵'],
          ex:[['他们尽管性格不同，但是有很多共同爱好。'],['尽管时间紧张、压力很大，但是他们还是完成了任务。'],['尽管她已经很累了，可是还是很耐心地给女儿读睡前故事。']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：今天和老同学的聚餐怎么样？','B：尽管很久没见了，____。'],
                 ['A：你们坐上飞机了吧？','B：是的，____，但是我们最后还是坐上了飞机。'],
                 ['A：你最后买那台电脑了吗？','B：____，____。']] } },
      { kind:'Đoạn văn', title:['杨同乐的双份幸运'],
        words:[[19,'印象','yìnxiàng','n.','ấn tượng'],[20,'实在','shízài','adj./adv.','thật thà; thật sự'],[21,'阳光','yángguāng','adj./n.','tươi sáng; ánh nắng'],[22,'负责','fùzé','adj./v.','có trách nhiệm; phụ trách'],
               [23,'积极','jījí','adj.','tích cực'],[24,'此','cǐ','pron.','này'],[25,'从此','cóngcǐ','adv.','từ đó, từ nay'],[26,'产生','chǎnshēng','v.','nảy sinh'],
               [27,'爱情','àiqíng','n.','tình yêu'],[28,'间','jiān','n.','giữa'],[29,'友情','yǒuqíng','n.','tình bạn'],[30,'美好','měihǎo','adj.','tốt đẹp']],
        paras:[
          [['王一雪比杨同乐更早进入公司。杨同乐刚来不久，王一雪对他印象就非常好：人很实在，性格阳光，工作负责，表现积极……后来他们一起出了次差，此次出差，让两人熟悉了起来，从此成了好朋友。一次聊天儿时，王一雪了解到杨同乐还没女朋友，正好自己的妹妹王一飞也没有男朋友，于是王一雪就把王一飞介绍给了他。']],
          [['杨同乐和王一飞认识后，很聊得来，两人之间慢慢产生了爱情，最后成了夫妻。杨同乐说自己很幸运，和王一雪这份同事间的友情，给他带来了美好的爱情。']]],
        gram:{ no:3, zh:'指示代词“此”', vi:'Đại từ chỉ thị “此”',
          note:'“此” nghĩa là “这、这个” (này), thường dùng trong văn viết hoặc hoàn cảnh trang trọng.',
          f:['此 + (Lượng từ) + Danh từ','此次 / 此人 / 从此'], mark:'此',
          hints:['负责','错过','活动'],
          ex:[['此次出差，让两人熟悉了起来，从此成了好朋友。'],['此人聪明、有能力，一定能顺利完成任务。'],['此材料很重要，必须直接交给他。']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['此项（xiàng, item）工作交给你，____。'],['很幸运此生____，____。'],['____地点是校图书馆。']] } },
      { kind:'Đoạn văn', title:['爱更需要经营'],
        words:[[31,'人生','rénshēng','n.','cuộc đời'],[32,'精彩','jīngcǎi','adj.','đặc sắc, tuyệt vời'],[33,'感情','gǎnqíng','n.','tình cảm'],[34,'深','shēn','adj.','sâu sắc'],
               [35,'经营','jīngyíng','v.','vun đắp, gây dựng'],[36,'对方','duìfāng','n.','đối phương'],[37,'感受','gǎnshòu','n./v.','cảm nhận'],[38,'尤其','yóuqí','adv.','đặc biệt là'],
               [39,'日子','rìzi','n.','cuộc sống, ngày tháng'],[40,'从来','cónglái','adv.','từ trước đến nay']],
        paras:[
          [['李文在校园里遇见白家月，从此，他们的人生变得更加精彩；王一飞和杨同乐通过王一雪介绍认识后，感情越来越深，最后两人幸福地走到了一起。']],
          [['在我看来，遇见爱情的方式并不重要，重要的是在合适的时间遇到了合适的人。遇见你，刚刚好。不过美好的遇见只是爱的开始，爱更需要经营。在一段感情中，两个人要多关注对方的感受，尤其是结婚后，更要共同经营好家庭，日子才能越过越好。爱，从来都是相互尊重、理解与支持，不是吗？']]],
        gram:{ no:4, zh:'时间副词“从来”', vi:'Phó từ thời gian “从来”',
          note:'Chỉ việc từ trước đến nay luôn như vậy. Thường dùng trong câu phủ định (从来不…, 从来没…过), đôi khi dùng trong câu khẳng định.',
          f:['从来 + 不 / 没(有) + Động từ','从来 + 都 + …'], mark:'从来[都不没]?',
          hints:['生气','迟到','放弃'],
          ex:[['爱，从来都是相互尊重、理解与支持，不是吗？'],['我从来没见过这个颜色的花，它叫什么名字啊？'],['我从来不喜欢一个人旅游，每次都要和家人或朋友一起去。']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['她性格很好，____。'],['我住的地方离公司很近，____。'],['这个习惯他一直坚持到现在，____。']] } }
    ]
  },

  "10": {
    speakers: { '刘明': ['明', 'a', 'Lưu Minh'], '王一雪': ['雪', 'b', 'Vương Nhất Tuyết'], '王一飞': ['飞', 'b', 'Vương Nhất Phi'], '陈天中': ['中', 'a', 'Trần Thiên Trung'], '白家月': ['月', 'c', 'Bạch Gia Nguyệt'] },
    audio: [['10-1', '10-2'], ['10-3', '10-4'], ['10-5', '10-6'], ['10-7', '10-8']],
    images: [
      [['images/l10-t1.jpg', 'Người co ro trong giá rét mùa đông']],
      [['images/l10-t2.jpg', 'Lâu đài băng ở lễ hội băng tuyết Cáp Nhĩ Tân']],
      [['images/l10-t3-quang-chau.jpg', 'Quảng Châu về đêm với tháp Quảng Châu'], ['images/l10-t3-cap-nhi-tan.jpg', 'Cáp Nhĩ Tân phủ tuyết trắng']],
      [['images/l10-t4.jpg', 'Thùng rác phân loại để tái chế']]
    ],
    texts: [
      { kind:'Hội thoại',
        ctx:['在家里，刘明和王一雪说他在网上看到的一条信息。'],
        words:[[1,'小伙子','xiǎohuǒzi','n.','chàng trai trẻ'],[2,'气温','qìwēn','n.','nhiệt độ (không khí)'],[3,'零下','líng xià','','âm, dưới 0 độ'],[4,'度','dù','m.','độ'],
               [5,'冻','dòng','v.','lạnh cóng; đóng băng'],[6,'后悔','hòuhuǐ','v.','hối hận'],[7,'就是','jiùshì','adv.','đúng vậy'],[8,'温度','wēndù','n.','nhiệt độ'],
               [9,'差别','chābié','n.','sự khác biệt'],[10,'厚','hòu','adj.','dày'],
               ['专名','广州','Guǎngzhōu','Danh từ riêng','Quảng Châu'],['专名','哈尔滨','Hā\'ěrbīn','Danh từ riêng','Cáp Nhĩ Tân']],
        lines:[
          ['刘明','你看，这个小伙子从广州去哈尔滨出差，没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。'],
          ['王一雪','他一定后悔自己穿少了吧？'],
          ['刘明','是啊，这就叫南方不懂北方的冷。'],
          ['王一雪','就是呢，冬天北方和南方的温度差别还是很大的。'],
          ['刘明','所以冬天来北方，尤其是东北，一定要提前查好目的地的天气，看看下不下雪，气温怎么样。'],
          ['王一雪','对。更重要的是，说什么也得穿上厚一点儿的衣服。']],
        gram:{ no:1, zh:'固定格式“说什么/怎么（着）也得×”', vi:'Cấu trúc cố định “说什么/怎么（着）也得×”',
          note:'Diễn tả nhất định phải, dù thế nào cũng phải làm. Thường dùng trong khẩu ngữ.',
          f:['说什么 / 怎么(着) + 也得 + Động từ'], mark:'(?:说什么|怎么着?)也得',
          hints:['跑步','尝','回家'],
          ex:[['更重要的是，说什么也得穿上厚一点儿的衣服。'],['假期还有两天就结束了，我明天说什么也得把作业做完了。'],['我很后悔上次没参加这个活动，这次怎么着也得去。']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：你要出去跑步吗？','B：是的，我已经好几天没运动了，今天____。'],
                 ['A：我这个蛋糕做得不好吃，你别吃了。','B：那怎么行？这是你专门为我做的，____。'],
                 ['A：火车票和飞机票都卖完了，我们只能坐汽车回家过年了。','B：那也行。我们平时没时间，过年____。']] } },
      { kind:'Hội thoại',
        ctx:['在校园里，王一飞下课后遇到陈天中和白家月。'],
        words:[[11,'寒假','hánjià','n.','kỳ nghỉ đông'],[12,'暖和','nuǎnhuo','adj./v.','ấm áp; làm ấm'],[13,'低于','dīyú','v.','thấp hơn'],[14,'摄氏度','shèshìdù','m.','độ C'],
               [15,'受不了','shòubuliǎo','v.','không chịu nổi'],[16,'举办','jǔbàn','v.','tổ chức'],[17,'各种','gèzhǒng','pron.','các loại'],[18,'植物','zhíwù','n.','thực vật']],
        lines:[
          ['王一飞','寒假你们打算做什么呢？'],
          ['陈天中','我们刚刚还说呢，家月春节时要去广州，我计划去哈尔滨。'],
          ['王一飞','那时候广州暖和，但哈尔滨特别冷，气温一般都低于零下十摄氏度甚至零下二十摄氏度，这么低的温度你受不了吧？'],
          ['陈天中','没问题，受得了，我有的是厚衣服。我去哈尔滨主要是想看雪，听说春节时那里会举办很多活动。'],
          ['白家月','我想在广州过年，那里冬天比较暖和。而且我喜欢看花，听说广州的鲜花市场很有名，里面有各种植物。'],
          ['王一飞','真不错！听你们这么一说，我也想外出旅游了。']],
        gram:{ no:2, zh:'固定短语“有的是”', vi:'Cụm cố định “有的是”',
          note:'Thường dùng trong khẩu ngữ, nghĩa là có rất nhiều, nhấn mạnh số lượng nhiều (thiếu gì).',
          f:['有的是 + Danh từ','Danh từ + 有的是'], mark:'有的是',
          hints:['时间','人','机会'],
          ex:[['没问题，受得了，我有的是厚衣服。'],['过年时，家里有的是好吃的、好喝的，孩子们特别开心。'],['这个市场特别大，有的是水果和菜，你想买什么菜都能买到。']],
          task:'完成对话 · Hoàn thành hội thoại',
          drill:[['A：今天上午你能陪孩子出去玩吗？','B：没问题，我____。'],
                 ['A：我的房子都一个多月了还没租出去呢。','B：别急，你的房子位置好，一定____。'],
                 ['A：我这次没有申请到出国交流的机会。','B：没事，____。']] } },
      { kind:'Đoạn văn', title:['广州与哈尔滨的不同'],
        words:[[19,'公里','gōnglǐ','m.','ki-lô-mét'],[20,'气候','qìhòu','n.','khí hậu'],[21,'而','ér','conj.','mà, còn, nhưng'],[22,'此外','cǐwài','conj.','ngoài ra'],
               [23,'方言','fāngyán','n.','phương ngữ'],[24,'普通话','pǔtōnghuà','n.','tiếng phổ thông'],[25,'较','jiào','adv.','tương đối, khá'],[26,'使用','shǐyòng','v.','sử dụng'],
               [27,'引起','yǐnqǐ','v.','gây ra'],[28,'误会','wùhuì','n./v.','hiểu lầm']],
        paras:[
          [['广州和哈尔滨，一个在南方，一个在北方，两个城市之间的距离有三千多公里，气候也大不相同。广州基本上没有冬天，而哈尔滨的冬天一般会从十月开始，到第二年的三四月才结束。广州四季开满鲜花，所以又叫“花城”；哈尔滨冬天冰雪多，所以也叫“冰城”。']],
          [['此外，两地的方言也不一样。哈尔滨方言和普通话听起来比较像，而广州方言和普通话差别较大。如果广州人和哈尔滨人都只使用自己的方言，那么交流就很困难，甚至还可能引起误会。其实，中国很多地方都有自己的方言，所以，为了顺利交流，中国人从小都要学习普通话。']]],
        gram:{ no:3, zh:'连词“而”', vi:'Liên từ “而”',
          note:'而 nối động từ, tính từ, cụm từ hoặc phân câu, có ba cách dùng: (1) chuyển ý, nối hai thành phần trái nghĩa (còn, nhưng); (2) nối tiếp ý (mà, và); (3) chỉ quan hệ nhân quả (因为…而…).',
          f:['A，而 B (trái ngược)','Tính từ 1 + 而 + Tính từ 2','因为 + Nguyên nhân + 而 + Kết quả'], mark:'而',
          hints:['气温','表现','安静'],
          ex:[['广州基本上没有冬天，而哈尔滨的冬天一般会从十月开始，到第二年的三四月才结束。'],['在这个紧张而兴奋（xīngfèn, exciting）的日子里，我们都走出教室，为运动员们加油。'],['冬天，这个城市因为天气暖和而吸引了很多游客。']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['今天____特别高，____，下午三点才结束。'],['他____，客户对他非常满意。'],['热闹的校园因为放寒假____。']] } },
      { kind:'Đoạn văn',
        ctx:['“世界环境日”那天，刘小雪学校学生会发布了一份活动发起书。'],
        words:[[29,'亲爱','qīn\'ài','adj.','thân mến'],[30,'再次','zàicì','adv.','lần nữa'],[31,'开展','kāizhǎn','v.','triển khai'],[32,'绿色','lǜsè','adj.','xanh (thân thiện môi trường)'],
               [33,'环保','huánbǎo','n./adj.','bảo vệ môi trường; thân thiện môi trường'],[34,'拒绝','jùjué','v.','từ chối'],[35,'浪费','làngfèi','v.','lãng phí'],[36,'节约','jiéyuē','v.','tiết kiệm'],
               [37,'资源','zīyuán','n.','tài nguyên'],[38,'光','guāng','adj.','hết sạch'],[39,'垃圾','lājī','n.','rác'],[40,'分类','fēnlèi','v.','phân loại'],[41,'日常','rìcháng','adj.','hằng ngày']],
        paras:[
          { t:'亲爱的同学们：', cls:'flat' },
          [['今年的“世界环境日”，我们再次开展“绿色生活”活动，希望同学们做到：']],
          { t:'一、绿色出行', cls:'flat' },
          [['绿色一小步，环保一大步。根据距离选择绿色交通方式。距离短时可以走路或者骑自行车，距离长时多乘坐公交车或者地铁。']],
          { t:'二、拒绝浪费', cls:'flat' },
          [['节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。']],
          { t:'三、垃圾分类', cls:'flat' },
          [['积极参加校园、小区环保活动，学习垃圾分类知识，从小事做起，做好垃圾分类。']],
          [['保护环境是每一个人的责任。同学们，让我们共同努力，让绿色生活成为我们的日常习惯！']],
          { t:'校学生会', cls:'right' },
          { t:'2026年6月5日', cls:'right' }],
        gram:{ no:4, zh:'频率副词“再次”', vi:'Phó từ tần suất “再次”',
          note:'“再次” đứng trước động từ, nghĩa là lần thứ hai, thêm một lần nữa.',
          f:['再次 + Động từ'], mark:'再次',
          hints:['来','见到','检查'],
          ex:[['今年的“世界环境日”，我们再次开展“绿色生活”活动。'],['我去年冬天去过一次哈尔滨，很喜欢那里的雪；今年冬天，我计划再次去哈尔滨看雪。'],['再次感谢您的支持与关心！']],
          task:'完成句子 · Hoàn thành câu',
          drill:[['欢迎您____。'],['____老同学，大家都特别高兴。'],['他出门前____，看看东西都带好了没有。']] } }
    ]
  }
};

(function () {
  const css = `
.lt{display:grid;gap:16px}
.lt-tools{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.lt-tools .btn[aria-pressed="false"]{opacity:.55;text-decoration:line-through}
.lt.no-py .lt-py,.lt.no-vi .lt-vi{visibility:hidden}
.lt-text{scroll-margin-top:90px}
.lt-text>summary{align-items:center}
.lt-head{display:grid;gap:2px;min-width:0}
.lt-head .hz{font-size:19px;font-weight:700;line-height:1.45}
.lt-block{display:grid;gap:10px}
.lt-block+.lt-block{padding-top:16px;border-top:1px solid var(--line)}
.lt-audio{width:100%;max-width:420px;height:40px}
.lt-vocab{display:grid}
.lt-vrow{display:grid;grid-template-columns:5.5em 8.5em minmax(0,1fr);gap:4px 16px;align-items:start;padding:12px 4px;border-bottom:1px solid var(--line)}
.lt-vrow:first-child{border-top:1px solid var(--line)}
.lt-vrow .w{font-family:var(--hz);font-size:30px;font-weight:700;line-height:1.2;white-space:nowrap}
.lt-vrow .w small{display:block;font-family:var(--ui);font-size:11px;font-weight:600;color:var(--ink-2)}
.lt-vrow .lt-py{color:var(--seal);font-size:19px;font-weight:600;line-height:1.3}
.lt-vrow .pos{font-size:13px;color:var(--ink-2)}
.lt-vrow .lt-vi{font-size:17px;font-weight:700;line-height:1.35}
.lt-vrow .ex{font-family:var(--hz);font-size:17px;color:var(--ink-2);line-height:1.6;margin-top:2px}
.lt-zh{font-family:var(--hz);font-size:20px;line-height:1.7}
.lt-dialog{display:grid;gap:10px}
.lt-line{display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px;align-items:start}
.lt-who{display:grid;justify-items:center;gap:2px;width:52px;font-size:11px;font-weight:650;color:var(--ink-2);white-space:nowrap}
.lt-who i{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-family:var(--hz);font-style:normal;font-weight:700;font-size:15px}
.lt-who.a i{background:var(--accent);color:var(--accent-ink)}
.lt-who.b i{background:var(--seal);color:#fff}
.lt-who.c i{background:var(--surface-2);color:var(--ink-2)}
.lt-bubble{background:var(--surface-2);border-radius:4px 14px 14px 14px;padding:8px 14px;font-family:var(--hz);font-size:21px;line-height:1.7}
.lt-ctx{font-family:var(--hz);font-size:17px;color:var(--ink-2)}
.lt-textgrid{display:grid;grid-template-columns:minmax(0,1fr) minmax(220px,36%);gap:20px;align-items:start}
.lt-textgrid>div{display:grid;gap:10px;min-width:0}
.lt-pics{display:grid;gap:12px;position:sticky;top:24px}
.lt-pics img{display:block;width:100%;height:auto;border-radius:16px;box-shadow:0 1px 0 rgba(31,31,47,.06)}
@media(max-width:760px){.lt-textgrid{grid-template-columns:1fr}.lt-pics{position:static;grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}}
.lt-passage{background:var(--surface-2);border-radius:14px;padding:18px 22px;display:grid;gap:10px}
.lt-passage p{margin:0;font-family:var(--hz);font-size:21px;line-height:1.9;text-indent:2em}
.lt-passage p.flat{text-indent:0}
.lt-passage p.right{text-indent:0;text-align:right}
@media(max-width:620px){.lt-vrow{grid-template-columns:auto minmax(0,1fr)}.lt-vrow .lt-mean{grid-column:1/-1}.lt-bubble,.lt-passage p{font-size:19px}}
.lt-gbox{background:var(--good-soft);border:2px solid var(--good);border-radius:20px;padding:20px 22px;display:grid;gap:14px}
.lt-gtag{justify-self:start;background:var(--good);color:#fff;font-weight:700;font-size:13px;letter-spacing:.04em;padding:4px 12px;border-radius:999px}
.lt-gtitle{font-family:var(--hz);font-size:30px;font-weight:700;line-height:1.3}
.lt-gnote{font-size:15px;color:var(--ink)}
.lt-gnote b{color:var(--good)}
.lt-formula{display:flex;flex-wrap:wrap;gap:10px}
.lt-f{background:var(--surface);border-radius:12px;padding:10px 16px;font-size:18px;font-weight:650;box-shadow:0 1px 0 rgba(31,31,47,.06)}
.lt-f .hz{font-size:22px;font-weight:700;color:var(--good)}
.lt-gex{background:var(--surface);border-radius:14px;padding:14px 18px 14px 44px;margin:0;display:grid;gap:8px}
.lt-gex li{font-family:var(--hz);font-size:21px;line-height:1.7;padding-left:4px}
.lt-gex li::marker{font-family:var(--ui);font-size:14px;color:var(--ink-2)}
.lt-gex mark,.lt-drill mark{background:var(--good-soft);color:var(--good);font-weight:700;border-radius:4px;padding:0 2px}
.lt-drill{border:1px dashed var(--line);border-radius:14px;padding:14px 16px;display:grid;gap:8px}
.lt-drill ol{margin:0;padding-left:24px;display:grid;gap:14px}
.lt-drow{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:center;justify-content:space-between}
.lt-drill .lt-zh{font-size:19px;line-height:1.9}
.lt-hint{flex:none;display:inline-flex;align-items:center;gap:6px;background:var(--warn-soft);color:var(--warn);border-radius:999px;padding:4px 12px;font-size:13px;font-weight:650}
.lt-hint .hz{font-size:18px;font-weight:700;color:var(--ink)}
.lt-blank{display:inline-block;width:8em;max-width:50vw;border-bottom:2px solid var(--accent);margin:0 4px;height:1.3em;vertical-align:bottom}
`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);


  window.renderLessonTexts = function renderLessonTexts(lessonNumber, h) {
    const data = window.LESSON_TEXTS[String(lessonNumber)];
    if (!data) return '';
    const blanks = s => h(s).replace(/____/g, '<span class="lt-blank"></span>');
    /* Tô đậm phần chữ Hán trong công thức, và tô màu phần ngữ pháp trong câu ví dụ. */
    const hanzi = s => h(s).replace(/[㐀-鿿]+/g, m => `<span class="hz">${m}</span>`);
    const mark = (s, re) => re ? h(s).replace(new RegExp(re, 'g'), m => `<mark>${m}</mark>`) : h(s);

    /* Nghĩa và câu ví dụ lấy từ kho từ vựng của trang (vocab-data.js) nếu có, không thì dùng nghĩa trong sách. */
    const vocab = typeof VOCAB !== 'undefined' && Array.isArray(VOCAB) ? VOCAB : [];
    const lookup = word => vocab.find(v => v.tu === word && v.bai === +lessonNumber) || vocab.find(v => v.tu === word) || {};
    const audio = (name, label) => name
      ? `<audio class="lt-audio" controls preload="none" src="audio/${h(name)}.mp3" aria-label="${h(label)}"></audio>` : '';

    const text = (t, i) => {
      const id = `lt-t${i + 1}`, g = t.gram, files = (data.audio || [])[i] || [], pics = (data.images || [])[i] || [];
      const head = `<span class="hz">${h(t.title ? t.title[0] : t.ctx[0])}</span>`;
      const body = t.lines
        ? `<div class="lt-ctx">${h(t.ctx[0])}</div>
          <div class="lt-dialog">${t.lines.map(l => {
            const w = data.speakers[l[0]] || [l[0].slice(0, 1), 'c', l[0]];
            return `<div class="lt-line"><span class="lt-who ${w[1]}"><i>${h(w[0])}</i>${h(l[0])}</span><div class="lt-bubble">${h(l[1])}</div></div>`;
          }).join('')}</div>`
        : `${t.ctx ? `<div class="lt-ctx">${h(t.ctx[0])}</div>` : ''}
          <div class="lt-passage">${t.paras.map(p => Array.isArray(p)
            ? `<p>${h(p.map(s => s[0]).join(''))}</p>`
            : `<p class="${h(p.cls || '')}">${h(p.t)}</p>`).join('')}</div>`;
      return `<details class="reference-card lt-text" id="${id}" open>
        <summary><span class="reference-number">课文 ${i + 1}</span><span class="lt-head">${head}</span><span class="chip">${h(t.kind)}</span></summary>
        <div class="reference-body">
          <div class="lt-block" data-ink="${id}-words">
            <div class="eyebrow">生词 · Từ mới</div>
            ${audio(files[1], 'Nghe từ mới bài khóa ' + (i + 1))}
            <div class="lt-vocab">${t.words.map(w => {
              const v = lookup(w[1]);
              return `<div class="lt-vrow">
                <div class="w">${h(w[1])}<small>${w[0]}</small></div>
                <div><div class="lt-py">${h(v.pinyin || w[2])}</div><div class="pos">${h(v.tuLoai || w[3])}</div></div>
                <div class="lt-mean"><div class="lt-vi">${h(v.nghia || w[4])}</div>${v.viDu ? `<div class="ex">${h(v.viDu)}</div>` : ''}</div>
              </div>`;
            }).join('')}</div>
          </div>
          <div class="lt-block" data-ink="${id}-text">
            <div class="eyebrow">课文 · ${h(t.kind)}</div>
            ${audio(files[0], 'Nghe bài khóa ' + (i + 1))}
            ${pics.length
              ? `<div class="lt-textgrid"><div>${body}</div><div class="lt-pics">${pics.map(p => `<img src="${h(p[0])}" alt="${h(p[1])}" loading="lazy">`).join('')}</div></div>`
              : body}
          </div>
          <div class="lt-block" data-ink="${id}-gram">
            <div class="eyebrow">小语讲堂 · Ngữ pháp ${g.no}</div>
            <div class="lt-gbox">
              <span class="lt-gtag">Ngữ pháp ${g.no}</span>
              <div class="lt-gtitle">${h(g.zh)}</div>
              <div class="lt-gnote"><b>${h(g.vi)}.</b> ${h(g.note)}</div>
              <div class="lt-formula">${g.f.map(f => `<span class="lt-f">${hanzi(f)}</span>`).join('')}</div>
              <ol class="lt-gex">${g.ex.map(s => `<li>${mark(s[0], g.mark)}</li>`).join('')}</ol>
            </div>
            <div class="lt-drill">
              <div class="eyebrow">${h(g.task)}</div>
              <ol>${g.drill.map((d, k) => `<li><div class="lt-drow"><div>${d.map(x => `<div class="lt-zh">${blanks(x)}</div>`).join('')}</div>
                ${g.hints && g.hints[k] ? `<span class="lt-hint">Gợi ý <span class="hz">${h(g.hints[k])}</span></span>` : ''}</div></li>`).join('')}</ol>
            </div>
          </div>
        </div>
      </details>`;
    };

    return `<details class="lesson-collapsible" open>
      <summary><div><div class="eyebrow">Nội dung bài học trong sách</div><h2>Bài khóa · ${data.texts.length} phần</h2></div><span class="collapse-label" aria-hidden="true"></span></summary>
      <div class="lesson-collapsible-body lt" data-ink="lt-top">
        <div class="lt-tools">
          ${data.texts.map((t, i) => `<button class="btn" type="button" data-lt-jump="lt-t${i + 1}">课文 ${i + 1} <span class="muted small">${h(t.kind)}</span></button>`).join('')}
          <span class="sp"></span>
          <button class="btn" type="button" data-lt-toggle="no-py" aria-pressed="true">Pinyin</button>
          <button class="btn" type="button" data-lt-toggle="no-vi" aria-pressed="true">Nghĩa</button>
        </div>
        ${data.texts.map(text).join('')}
      </div>
    </details>`;
  };

  document.addEventListener('click', e => {
    const jump = e.target.closest('[data-lt-jump]');
    if (jump) {
      const el = document.getElementById(jump.dataset.ltJump);
      if (el) { el.open = true; el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      return;
    }
    const tg = e.target.closest('[data-lt-toggle]');
    if (tg) {
      const on = tg.getAttribute('aria-pressed') !== 'true';
      tg.setAttribute('aria-pressed', on);
      tg.closest('.lt').classList.toggle(tg.dataset.ltToggle, !on);
    }
  });
})();
