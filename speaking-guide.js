/* Nội dung Bí kíp thi nói HSKK 中级. Tách riêng để dễ cập nhật giáo trình. */
(() => {
  const types = [
    {
      id:'dang-1', title:'Dạng 1 – Kể trải nghiệm cá nhân', badge:'经历',
      focus:'Trọng tâm là kể một câu chuyện có diễn biến và một điểm nhấn. Không nên liệt kê lịch trình.',
      framework:[
        'Mở: nêu sự việc, thời gian, địa điểm, đi cùng ai.',
        'Diễn biến: kể theo trình tự thời gian, 2–3 bước.',
        'Điểm nhấn: một chi tiết bất ngờ hoặc ấn tượng nhất, nói rõ vì sao.',
        'Kết: cảm nhận hoặc bài học rút ra.'
      ],
      phrases:'我想说说…… / 那是……的时候 / 一开始……后来……最后…… / 本来……没想到…… / 让我印象最深的是…… / 通过这次……，我明白了……',
      question:'请介绍一次难忘的旅行。',
      rows:[
        ['Mở','我想介绍一次让我非常难忘的旅行。','Wǒ xiǎng jièshào yí cì ràng wǒ fēicháng nánwàng de lǚxíng.','Tôi muốn giới thiệu một chuyến đi khiến tôi vô cùng khó quên.'],
        ['Mở','那是三年前的夏天，我和两个好朋友一起去了大叻。','Nà shì sān nián qián de xiàtiān, wǒ hé liǎng ge hǎo péngyou yìqǐ qù le Dàlè.','Đó là mùa hè ba năm trước, tôi cùng hai người bạn thân đi Đà Lạt.'],
        ['Diễn biến','大叻是越南有名的山城，天气很凉快，风景也特别美。','Dàlè shì Yuènán yǒumíng de shānchéng, tiānqì hěn liángkuai, fēngjǐng yě tèbié měi.','Đà Lạt là thành phố núi nổi tiếng của Việt Nam, thời tiết mát mẻ, phong cảnh rất đẹp.'],
        ['Diễn biến','我们一共玩了四天。第一天，我们参观了花园和湖，拍了很多照片。','Wǒmen yígòng wán le sì tiān. Dì-yī tiān, wǒmen cānguān le huāyuán hé hú, pāi le hěn duō zhàopiàn.','Chúng tôi chơi tổng cộng bốn ngày. Ngày đầu, chúng tôi tham quan vườn hoa và hồ, chụp rất nhiều ảnh.'],
        ['Diễn biến','第二天，我们本来打算去爬山，没想到下了一场大雨，只好在酒店里休息。','Dì-èr tiān, wǒmen běnlái dǎsuan qù pá shān, méi xiǎngdào xià le yì cháng dà yǔ, zhǐhǎo zài jiǔdiàn li xiūxi.','Ngày thứ hai, chúng tôi định đi leo núi, không ngờ trời mưa to, đành nghỉ ở khách sạn.'],
        ['Điểm nhấn','当时我有点儿失望，可是后来我们在附近发现了一家小咖啡馆。','Dāngshí wǒ yǒudiǎnr shīwàng, kěshì hòulái wǒmen zài fùjìn fāxiàn le yì jiā xiǎo kāfēiguǎn.','Lúc đó tôi hơi thất vọng, nhưng sau đó chúng tôi phát hiện một quán cà phê nhỏ gần đó.'],
        ['Điểm nhấn','我们一边喝咖啡，一边聊天，聊了整整一个下午。','Wǒmen yìbiān hē kāfēi, yìbiān liáotiān, liáo le zhěngzhěng yí ge xiàwǔ.','Chúng tôi vừa uống cà phê vừa trò chuyện, trò chuyện suốt cả buổi chiều.'],
        ['Điểm nhấn','让我印象最深的就是那个下午，因为平时大家工作都很忙，很少有机会这样放松地聊天。','Ràng wǒ yìnxiàng zuì shēn de jiù shì nàge xiàwǔ, yīnwèi píngshí dàjiā gōngzuò dōu hěn máng, hěn shǎo yǒu jīhuì zhèyàng fàngsōng de liáotiān.','Điều khiến tôi ấn tượng nhất chính là buổi chiều đó, vì bình thường ai cũng bận, hiếm khi có dịp thư thả trò chuyện như vậy.'],
        ['Kết','通过这次旅行，我明白了：旅行的意义不只是看风景，更重要的是和谁在一起。','Tōngguò zhè cì lǚxíng, wǒ míngbai le: lǚxíng de yìyì bù zhǐ shì kàn fēngjǐng, gèng zhòngyào de shì hé shéi zài yìqǐ.','Qua chuyến đi này, tôi hiểu rằng ý nghĩa của du lịch không chỉ là ngắm cảnh, quan trọng hơn là đi cùng ai.'],
        ['Kết','直到现在，我还常常想起那次旅行。','Zhídào xiànzài, wǒ hái chángcháng xiǎngqǐ nà cì lǚxíng.','Đến tận bây giờ, tôi vẫn thường nhớ lại chuyến đi đó.']
      ]
    },
    {
      id:'dang-2', title:'Dạng 2 – Giới thiệu, mô tả người, nơi chốn, sở thích', badge:'介绍',
      focus:'Mỗi đặc điểm nêu ra phải đi kèm một ví dụ cụ thể. Chỉ nói “她很好、很热情” thì bài sẽ ngắn và bị chấm thấp về nội dung.',
      framework:[
        'Mở: đó là ai hoặc cái gì, quen biết hay gắn bó từ khi nào.',
        'Mô tả: ngoại hình hoặc đặc điểm bên ngoài (1 câu), rồi 2 đặc điểm tính cách hoặc nét nổi bật, mỗi đặc điểm có ví dụ.',
        'Một câu chuyện ngắn chứng minh đặc điểm đó.',
        'Kết: ý nghĩa hoặc ảnh hưởng của người, nơi chốn, sở thích đó với bản thân.'
      ],
      extra:'Với nơi chốn, thay “tính cách” bằng: vị trí, khí hậu, món ăn, con người. Với sở thích: bắt đầu từ khi nào, vì sao thích, mang lại lợi ích gì.',
      phrases:'我最……的……是…… / 我们是在……认识的 / 他/她是一个……的人，比如…… / 让我最感动的是…… / 对我来说，……不仅是……，更是……',
      question:'你最好的朋友是谁？请介绍一下。',
      rows:[
        ['Mở','我最好的朋友叫阿兰，我们是在大学认识的。','Wǒ zuì hǎo de péngyou jiào Ā Lán, wǒmen shì zài dàxué rènshi de.','Bạn thân nhất của tôi tên là Lan, chúng tôi quen nhau ở đại học.'],
        ['Mở','那时候我们住在同一个宿舍，到现在已经是十年的朋友了。','Nà shíhou wǒmen zhù zài tóng yí ge sùshè, dào xiànzài yǐjīng shì shí nián de péngyou le.','Hồi đó chúng tôi ở cùng một ký túc xá, đến nay đã là bạn mười năm rồi.'],
        ['Mô tả','阿兰个子不高，长头发，总是笑眯眯的。','Ā Lán gèzi bù gāo, cháng tóufa, zǒngshì xiàomīmī de.','Lan dáng không cao, tóc dài, lúc nào cũng tươi cười.'],
        ['Mô tả','她是一个非常热情、细心的人。','Tā shì yí ge fēicháng rèqíng, xìxīn de rén.','Cô ấy là người rất nhiệt tình và chu đáo.'],
        ['Mô tả','比如，每次朋友过生日，她都会提前准备礼物，而且每份礼物都很特别。','Bǐrú, měi cì péngyou guò shēngrì, tā dōu huì tíqián zhǔnbèi lǐwù, érqiě měi fèn lǐwù dōu hěn tèbié.','Ví dụ, mỗi lần bạn bè sinh nhật, cô ấy đều chuẩn bị quà trước, mà món quà nào cũng rất đặc biệt.'],
        ['Câu chuyện','让我最感动的是大三那年，我生了一场病，在医院住了一个星期。','Ràng wǒ zuì gǎndòng de shì dà sān nà nián, wǒ shēng le yì cháng bìng, zài yīyuàn zhù le yí ge xīngqī.','Điều khiến tôi cảm động nhất là năm ba đại học, tôi bị ốm, nằm viện một tuần.'],
        ['Câu chuyện','那段时间，阿兰每天下课后都来看我，还帮我记笔记。','Nà duàn shíjiān, Ā Lán měi tiān xià kè hòu dōu lái kàn wǒ, hái bāng wǒ jì bǐjì.','Thời gian đó, ngày nào tan học Lan cũng đến thăm tôi, còn chép bài giúp tôi.'],
        ['Câu chuyện','所以我出院以后，考试成绩一点儿也没受影响。','Suǒyǐ wǒ chū yuàn yǐhòu, kǎoshì chéngjì yìdiǎnr yě méi shòu yǐngxiǎng.','Vì vậy sau khi ra viện, kết quả thi của tôi không hề bị ảnh hưởng.'],
        ['Kết','现在我们在不同的城市工作，不能常常见面，但是每个星期都会打电话聊聊天。','Xiànzài wǒmen zài bù tóng de chéngshì gōngzuò, bù néng chángcháng jiànmiàn, dànshì měi ge xīngqī dōu huì dǎ diànhuà liáoliao tiān.','Giờ chúng tôi làm việc ở hai thành phố khác nhau, không thể gặp thường xuyên, nhưng tuần nào cũng gọi điện trò chuyện.'],
        ['Kết','对我来说，阿兰不仅是朋友，更像是我的家人。','Duì wǒ lái shuō, Ā Lán bùjǐn shì péngyou, gèng xiàng shì wǒ de jiārén.','Với tôi, Lan không chỉ là bạn, mà còn giống như người nhà.']
      ]
    },
    {
      id:'dang-3', title:'Dạng 3 – Nêu quan điểm, đồng ý hay phản đối', badge:'观点',
      focus:'Nêu lập trường ngay câu đầu và giữ nguyên đến cuối. Thêm một câu nhượng bộ (当然……但是……) giúp bài chặt chẽ hơn, nhưng không được đổi phe giữa chừng.',
      framework:[
        'Mở: nêu lập trường (đồng ý, phản đối, hoặc đồng ý có điều kiện).',
        'Lý do 1 kèm ví dụ, ưu tiên ví dụ của bản thân.',
        'Lý do 2 kèm ví dụ hoặc giải thích.',
        'Nhượng bộ: thừa nhận ý kiến ngược lại, rồi phản biện hoặc đưa điều kiện.',
        'Kết: nhắc lại lập trường bằng câu khác.'
      ],
      phrases:'我（比较）同意/不同意这个看法 / 对于……，我是支持/反对的 / 主要有两个原因 / 第一……第二…… / 拿……来说 / 当然，……也有一定的道理，但是…… / 只要……就…… / 总之，我认为……',
      question:'你怎么看待大学生打工？',
      rows:[
        ['Mở','对于大学生打工，我是支持的。','Duìyú dàxuéshēng dǎgōng, wǒ shì zhīchí de.','Về việc sinh viên đi làm thêm, tôi ủng hộ.'],
        ['Mở','我认为打工对大学生有好处，主要有两个原因。','Wǒ rènwéi dǎgōng duì dàxuéshēng yǒu hǎochu, zhǔyào yǒu liǎng ge yuányīn.','Tôi cho rằng làm thêm có lợi cho sinh viên, chủ yếu vì hai lý do.'],
        ['Lý do 1','第一，打工可以积累工作经验。','Dì-yī, dǎgōng kěyǐ jīlěi gōngzuò jīngyàn.','Thứ nhất, làm thêm giúp tích lũy kinh nghiệm làm việc.'],
        ['Lý do 1','拿我自己来说，我大二的时候在一家公司做翻译，学到了很多课本上学不到的东西，比如怎么跟客户沟通。','Ná wǒ zìjǐ lái shuō, wǒ dà èr de shíhou zài yì jiā gōngsī zuò fānyì, xué dào le hěn duō kèběn shang xué bu dào de dōngxi, bǐrú zěnme gēn kèhù gōutōng.','Lấy bản thân tôi làm ví dụ, năm hai đại học tôi làm phiên dịch cho một công ty, học được nhiều điều sách vở không dạy, ví dụ cách giao tiếp với khách hàng.'],
        ['Lý do 1','毕业找工作的时候，这段经历给了我很大的帮助。','Bìyè zhǎo gōngzuò de shíhou, zhè duàn jīnglì gěi le wǒ hěn dà de bāngzhù.','Khi tốt nghiệp tìm việc, trải nghiệm này giúp ích tôi rất nhiều.'],
        ['Lý do 2','第二，打工能让学生明白挣钱不容易，从而学会合理地花钱。','Dì-èr, dǎgōng néng ràng xuésheng míngbai zhèng qián bù róngyì, cóng’ér xuéhuì hélǐ de huā qián.','Thứ hai, làm thêm giúp sinh viên hiểu kiếm tiền không dễ, từ đó biết chi tiêu hợp lý.'],
        ['Nhượng bộ','当然，有人担心学生打工，学习成绩会下降，这种担心也有一定的道理。','Dāngrán, yǒu rén dānxīn xuésheng dǎgōng, xuéxí chéngjì huì xiàjiàng, zhè zhǒng dānxīn yě yǒu yídìng de dàolǐ.','Tất nhiên, có người lo sinh viên đi làm thêm thì kết quả học tập sẽ giảm, nỗi lo này cũng có lý.'],
        ['Nhượng bộ','但是只要安排好时间，比如只在周末打工，就不会有太大的问题。','Dànshì zhǐyào ānpái hǎo shíjiān, bǐrú zhǐ zài zhōumò dǎgōng, jiù bú huì yǒu tài dà de wèntí.','Nhưng chỉ cần sắp xếp thời gian hợp lý, ví dụ chỉ làm vào cuối tuần, thì sẽ không có vấn đề gì lớn.'],
        ['Kết','总之，我认为大学生打工的好处比坏处多，但是一定要把学习放在第一位。','Zǒngzhī, wǒ rènwéi dàxuéshēng dǎgōng de hǎochu bǐ huàichu duō, dànshì yídìng yào bǎ xuéxí fàng zài dì-yī wèi.','Tóm lại, tôi cho rằng sinh viên đi làm thêm lợi nhiều hơn hại, nhưng nhất định phải đặt việc học lên hàng đầu.']
      ]
    },
    {
      id:'dang-4', title:'Dạng 4 – Phân tích ưu nhược điểm, so sánh', badge:'利弊',
      focus:'Phải nói cả hai mặt với lượng ý tương đương (thường 2 lợi, 2 hại), sau đó mới đưa ra kết luận riêng. Chỉ nói một mặt là lạc yêu cầu đề.',
      framework:[
        'Mở: nêu hiện tượng, rồi nói “có lợi cũng có hại”.',
        'Mặt lợi: 2 ý, mỗi ý có giải thích ngắn.',
        'Mặt hại: 2 ý, mỗi ý có giải thích ngắn.',
        'Kết: cân nhắc (lợi nhiều hơn hay hại nhiều hơn) và đưa ra cách tận dụng mặt lợi, hạn chế mặt hại.'
      ],
      extra:'Biến thể so sánh A với B (ví dụ 你喜欢住在城市还是农村？): chọn một bên, đưa 2 lý do có đối chiếu với bên kia (跟……比起来), thừa nhận một điểm mạnh của bên kia, rồi kết.',
      phrases:'随着……的发展，越来越多的人…… / ……有利也有弊 / 先说好处 / 不过，……也有一些问题 / 一方面……另一方面…… / 跟……比起来 / 总的来说，……利大于弊',
      question:'网上购物有哪些好处和坏处？',
      rows:[
        ['Mở','随着互联网的发展，越来越多的人选择在网上购物。','Suízhe hùliánwǎng de fāzhǎn, yuè lái yuè duō de rén xuǎnzé zài wǎngshang gòuwù.','Cùng với sự phát triển của Internet, ngày càng nhiều người chọn mua sắm trực tuyến.'],
        ['Mở','我觉得网上购物有利也有弊。','Wǒ juéde wǎngshang gòuwù yǒu lì yě yǒu bì.','Tôi thấy mua sắm trực tuyến có lợi cũng có hại.'],
        ['Lợi','先说好处。首先，网上购物非常方便，不用出门，在家用手机就能买到需要的东西。','Xiān shuō hǎochu. Shǒuxiān, wǎngshang gòuwù fēicháng fāngbiàn, búyòng chūmén, zài jiā yòng shǒujī jiù néng mǎi dào xūyào de dōngxi.','Nói về mặt lợi trước. Thứ nhất, mua sắm trực tuyến rất tiện, không cần ra ngoài, ở nhà dùng điện thoại là mua được thứ mình cần.'],
        ['Lợi','其次，网上的商品种类多，价格也比较便宜，还可以很容易地比较不同商店的价格。','Qícì, wǎngshang de shāngpǐn zhǒnglèi duō, jiàgé yě bǐjiào piányi, hái kěyǐ hěn róngyì de bǐjiào bù tóng shāngdiàn de jiàgé.','Thứ hai, hàng hóa trên mạng đa dạng, giá cũng tương đối rẻ, lại dễ so sánh giá giữa các cửa hàng.'],
        ['Hại','不过，网上购物也有一些问题。','Búguò, wǎngshang gòuwù yě yǒu yìxiē wèntí.','Tuy nhiên, mua sắm trực tuyến cũng có một số vấn đề.'],
        ['Hại','一方面，我们看不到真正的商品，有时候收到的东西跟照片上的不一样。','Yì fāngmiàn, wǒmen kàn bu dào zhēnzhèng de shāngpǐn, yǒu shíhou shōu dào de dōngxi gēn zhàopiàn shang bù yíyàng.','Một mặt, ta không nhìn thấy hàng thật, đôi khi nhận được hàng khác với ảnh.'],
        ['Hại','另一方面，因为太方便了，很多人容易买一些不需要的东西，浪费钱。','Lìng yì fāngmiàn, yīnwèi tài fāngbiàn le, hěn duō rén róngyì mǎi yìxiē bù xūyào de dōngxi, làngfèi qián.','Mặt khác, vì quá tiện nên nhiều người dễ mua những thứ không cần, lãng phí tiền.'],
        ['Kết','总的来说，我认为网上购物利大于弊。','Zǒng de lái shuō, wǒ rènwéi wǎngshang gòuwù lì dà yú bì.','Nhìn chung, tôi cho rằng mua sắm trực tuyến lợi nhiều hơn hại.'],
        ['Kết','只要我们选择信用好的商店，买东西之前多想一想，就能享受它带来的方便。','Zhǐyào wǒmen xuǎnzé xìnyòng hǎo de shāngdiàn, mǎi dōngxi zhīqián duō xiǎng yi xiǎng, jiù néng xiǎngshòu tā dàilái de fāngbiàn.','Chỉ cần chọn cửa hàng uy tín và suy nghĩ kỹ trước khi mua, ta sẽ tận hưởng được sự tiện lợi mà nó mang lại.']
      ]
    },
    {
      id:'dang-5', title:'Dạng 5 – Giải quyết tình huống, đưa lời khuyên', badge:'办法',
      focus:'Điểm cộng của dạng này là chia trường hợp (如果……就……；如果……就……). Cách này vừa kéo dài bài một cách tự nhiên, vừa cho thấy suy nghĩ chín chắn.',
      framework:[
        'Mở: nêu thái độ chung trước tình huống.',
        'Bước đầu tiên: tìm hiểu nguyên nhân hoặc tình hình.',
        'Chia 2 trường hợp, mỗi trường hợp nói rõ sẽ làm gì.',
        'Bổ sung một lưu ý hoặc mẹo thực tế.',
        'Kết: nguyên tắc chung và lợi ích của cách làm này.'
      ],
      extra:'Nếu đề yêu cầu khuyên người khác (你会给他什么建议？), giữ khung này và đổi chủ ngữ sang 我建议他…… / 他可以……',
      phrases:'如果遇到这种情况，我会…… / 首先我会……，然后…… / 如果……，我就……；要是……，我就…… / 另外，最好…… / 这样做，既能……，又不会……',
      question:'如果你的好朋友向你借一大笔钱，你会怎么做？',
      rows:[
        ['Mở','如果好朋友向我借一大笔钱，我不会马上同意，也不会马上拒绝。','Rúguǒ hǎo péngyou xiàng wǒ jiè yí dà bǐ qián, wǒ bú huì mǎshàng tóngyì, yě bú huì mǎshàng jùjué.','Nếu bạn thân hỏi mượn tôi một khoản tiền lớn, tôi sẽ không đồng ý ngay, cũng không từ chối ngay.'],
        ['Bước đầu','首先，我会问清楚他为什么需要这么多钱。','Shǒuxiān, wǒ huì wèn qīngchu tā wèi shénme xūyào zhème duō qián.','Trước hết, tôi sẽ hỏi rõ vì sao bạn ấy cần nhiều tiền như vậy.'],
        ['Trường hợp 1','如果是因为家里有人生病了，或者遇到了很急的困难，我会尽力帮助他。','Rúguǒ shì yīnwèi jiā li yǒu rén shēngbìng le, huòzhě yù dào le hěn jí de kùnnan, wǒ huì jìnlì bāngzhù tā.','Nếu là vì nhà có người ốm, hoặc gặp khó khăn cấp bách, tôi sẽ cố gắng hết sức giúp.'],
        ['Trường hợp 1','要是我自己的钱不够，我可以先借给他一部分，再帮他想想别的办法。','Yàoshi wǒ zìjǐ de qián bú gòu, wǒ kěyǐ xiān jiè gěi tā yí bùfen, zài bāng tā xiǎngxiang bié de bànfǎ.','Nếu tiền của tôi không đủ, tôi có thể cho mượn trước một phần, rồi giúp bạn ấy nghĩ cách khác.'],
        ['Trường hợp 2','但是如果他借钱是为了买很贵的手机，或者去旅游，我就会客气地拒绝他。','Dànshì rúguǒ tā jiè qián shì wèile mǎi hěn guì de shǒujī, huòzhě qù lǚyóu, wǒ jiù huì kèqi de jùjué tā.','Nhưng nếu bạn ấy mượn tiền để mua điện thoại đắt tiền hay đi du lịch, tôi sẽ từ chối một cách lịch sự.'],
        ['Trường hợp 2','我会告诉他我的真实想法，希望他能理解。','Wǒ huì gàosu tā wǒ de zhēnshí xiǎngfǎ, xīwàng tā néng lǐjiě.','Tôi sẽ nói thật suy nghĩ của mình và mong bạn ấy hiểu.'],
        ['Lưu ý','另外，借钱的时候最好说清楚什么时候还，这样以后不容易产生误会。','Lìngwài, jiè qián de shíhou zuìhǎo shuō qīngchu shénme shíhou huán, zhèyàng yǐhòu bù róngyì chǎnshēng wùhuì.','Ngoài ra, khi cho mượn tiền nên nói rõ khi nào trả, như vậy sau này khó xảy ra hiểu lầm.'],
        ['Kết','我觉得，真正的朋友应该互相帮助，但是帮助也要有原则。','Wǒ juéde, zhēnzhèng de péngyou yīnggāi hùxiāng bāngzhù, dànshì bāngzhù yě yào yǒu yuánzé.','Tôi nghĩ bạn bè thật sự nên giúp đỡ nhau, nhưng giúp đỡ cũng cần có nguyên tắc.'],
        ['Kết','这样做，既能帮到朋友，又不会影响我们的友谊。','Zhèyàng zuò, jì néng bāng dào péngyou, yòu bú huì yǐngxiǎng wǒmen de yǒuyì.','Làm như vậy vừa giúp được bạn, vừa không ảnh hưởng đến tình bạn.']
      ]
    }
  ];
  const mistakes = [
    ['Im lặng lâu giữa chừng','Mất điểm lưu loát','Dùng từ đệm tự nhiên: 怎么说呢、我想想、其实、也就是说'],
    ['Trả lời 2–3 câu rồi dừng','Thiếu thời lượng, mất điểm nội dung','Mỗi ý phải có 比如…… hoặc 拿……来说 đi kèm'],
    ['Lạc đề, nói sang chuyện khác','Mất điểm nội dung','Câu mở phải lặp lại từ khóa của đề'],
    ['Thuộc lòng nguyên bài mẫu','Không khớp đề thật, nói cứng','Học khung và mẫu câu, tập thay nội dung của chính mình'],
    ['Nói nhanh để “đủ ý”','Sai thanh điệu, nuốt âm','Giữ tốc độ khoảng 130–150 chữ/phút, ngắt hơi theo dấu phẩy'],
    ['Hết giờ khi chưa kết','Bài thiếu phần kết','Khoảng 20 giây cuối chuyển ngay sang 总之……']
  ];

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const table = (heads, rows, cls='') => `<div class="speaking-table ${cls}"><table><thead><tr>${heads.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const sample = t => table(['Phần','中文','Pinyin','Nghĩa'], t.rows);
  const typeSection = t => `<div class="speaking-detail">
    <button class="btn ghost speaking-back" data-act="backSpeaking">← Quay lại 5 dạng bài</button>
    <section class="panel speaking-section" id="${t.id}">
      <div class="speaking-body">
      <div><span class="chip acc hz">${t.badge}</span><div class="eyebrow" style="margin-top:12px">Dạng bài</div><h1 style="font-size:clamp(30px,4vw,48px);margin-top:4px">${esc(t.title.replace(/^Dạng \d+ – /,''))}</h1></div>
      <p class="lede" style="margin:0">${esc(t.focus)}</p>
      <div><h3>Khung triển khai</h3><ol class="speaking-list">${t.framework.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div>
      ${t.extra?`<div class="speaking-callout"><b>Lưu ý biến thể:</b> ${esc(t.extra)}</div>`:''}
      <div class="phrase-box"><b>Mẫu câu</b><div class="hz">${esc(t.phrases)}</div></div>
      <div><div class="eyebrow">Bài mẫu</div><h2 class="hz" style="margin:3px 0 12px">${esc(t.question)}</h2>${sample(t)}</div>
      <div><div class="eyebrow">Trước khi vào phòng thi</div><h2>Lỗi thường gặp và cách kiểm soát thời gian</h2>${table(['Lỗi','Hậu quả','Cách sửa'],mistakes,'general')}</div>
      <div class="phrase-box"><b>Ghi chú trong 10 phút chuẩn bị</b><div>Mỗi câu ghi 5–8 từ khóa theo thứ tự khung. Ví dụ với dạng 3:</div><div class="hz">支持 → 经验（翻译）→ 挣钱不容易 → 当然：成绩 → 周末 → 好处多</div></div>
      </div>
    </section>
    <button class="btn speaking-back" data-act="backSpeaking">← Quay lại 5 dạng bài</button>
  </div>`;

  const card = (t, i) => `<button class="speaking-type-card" data-act="showSpeakingType" data-type="${t.id}">
    <span class="speaking-type-number">0${i+1}</span>
    <span class="speaking-type-hz hz">${t.badge}</span>
    <span class="eyebrow">Dạng bài</span>
    <strong>${esc(t.title.replace(/^Dạng \d+ – /,''))}</strong>
    <span class="speaking-type-open">Xem bí kíp <span aria-hidden="true">→</span></span>
  </button>`;

  window.SPEAKING_GUIDE_HTML = `<div class="speaking-hero">
      <div class="eyebrow" style="color:rgba(255,255,255,.72)">HSKK 中级 · 回答问题</div>
      <h1>Bí kíp thi nói</h1>
      <p class="lede">Nhận diện nhanh 5 dạng đề, triển khai câu trả lời trong khoảng 2 phút và luyện theo bài mẫu Trung–Pinyin–Việt.</p>
      <div class="speaking-meta"><span class="chip">2 câu 回答问题</span><span class="chip">≈ 2 phút/câu</span><span class="chip">10 phút chuẩn bị chung</span><span class="chip">250–300 chữ/câu</span></div>
    </div>
    <div class="speaking-type-grid">${types.map(card).join('')}</div>`;

  window.renderSpeakingGuide = v => { v.innerHTML = window.SPEAKING_GUIDE_HTML; };
  window.showSpeakingType = id => {
    const type = types.find(item => item.id === id);
    if (!type) return;
    document.getElementById('view').innerHTML = typeSection(type);
    window.scrollTo({top:0,behavior:'smooth'});
  };
})();
