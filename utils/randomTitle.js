// Generate a random title
export const randomTitle = () => {
    let copypasta1 = ['ngọn lửa sưởi ấm tâm hồn', 'ngọn nến soi sáng tương lai', 'ngọn đuốc thổi bừng đam mê',
                      'ánh dương chói lòa', 'ánh đèn bừng tỏ', 'hào quang rực sáng', 'ngọn lửa thiêng của tri thức',
                      // A bunch of ngọn lửa sưởi ấm tâm hồn to increase the chance of it being picked
                      'ngọn lửa sưởi ấm tâm hồn', 'ngọn lửa sưởi ấm tâm hồn', 'ngọn lửa sưởi ấm tâm hồn',
                      'ngọn lửa sưởi ấm tâm hồn', 'ngọn lửa sưởi ấm tâm hồn', 'ngọn lửa sưởi ấm tâm hồn'
    ];
        let copypasta2 = [
          'trường hợp muốn được GPA 4.0',
          'nhiều đêm dài sương mù đông tuyết rơi hoài lòng ai đang nhớ nhà',
          'nhiều đêm ngồi học bài mama à đừng xót xa',
          'nhiều đêm dài ai còn đang vẫn miệt mài đợi chờ hình bóng ai',
          'nhiều đêm dài ai còn đang ngóng trông hoài đợi chờ ngày nắng mai',
          'nhiều đêm tối trên đồi bóc quýt lowkeyboy có ai day dứt đơn côi lẻ loi chắp tay ngó lên trời',
          'nhiều ngày lênh đênh trên bến mặt trời và cho ta thấy muôn loài',
          'nhiều ngày lênh đênh trên bến mặt trời và mấy con rắn săn mồi',
    ];
    let copypasta = copypasta1[Math.floor(Math.random()*copypasta1.length)] 
                  + ' trong ' + copypasta2[Math.floor(Math.random()*copypasta2.length)] + '!';
  
    return 'Bookwarm - Bởi vì sách là ' + copypasta;
}

export default randomTitle;