puts "Destroying old data..."
User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
Song.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('songs')
Post.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('posts')
Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('comments')
Quiz.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('quizzes')
Question.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('questions')
QuizQuestion.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('quiz_questions')
QuestionAnswer.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('question_answers')

puts "Creating users..."
user1 = User.create(username: "JusMc", password_digest: "123", profile_pic_url: "https://data.whicdn.com/images/344524632/original.jpg" )
user2 = User.create(username: "SeaBa", password_digest: "123", profile_pic_url: "https://pbs.twimg.com/media/Dm1ncIyXsAAdIkq.jpg" )
user3 = User.create(username: "BriGo", password_digest: "123", profile_pic_url: "https://data.whicdn.com/images/336425083/original.jpg" )
user4 = User.create(username: "JazSo", password_digest: "123", profile_pic_url: "https://i.pinimg.com/originals/3d/fd/d3/3dfdd3cce72f6d62c17d4fa2c595d6c9.jpg" )
user5 = User.create(username: "GarBo", password_digest: "123", profile_pic_url: "https://i.pinimg.com/originals/dc/55/a0/dc55a0fec14d93d9cf6fa32c32f7c7f2.jpg" )

puts "Creating songs..."

# Pop Songs (grooving/upbeat vibes)
song1 = Song.create(genre: "Pop", artist: "Justin Bieber", title: "Yummy", album_img_url: "https://images-na.ssl-images-amazon.com/images/I/81lleqz5QXL._SL1400_.jpg")
song2 = Song.create(genre: "Pop", artist: "Justin Timberlake", title: "Cry Me a River", album_img_url: "https://upload.wikimedia.org/wikipedia/en/7/73/Cry_Me_a_River_cover.png")
song3 = Song.create(genre: "Pop", artist: "Michael Jackson", title: "Beat It", album_img_url: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png")
song4 = Song.create(genre: "Pop", artist: "Miley Cyrus", title: "Never Be Me", album_img_url: "https://images.genius.com/d42ed1c943e01f99a4c3b15065d36c53.625x625x1.png")
song5 = Song.create(genre: "Pop", artist: "Taylor Swift", title: "Shake it Off", album_img_url: "https://upload.wikimedia.org/wikipedia/en/c/c4/Taylor_Swift_-_Shake_It_Off.png")

# Country Songs (sad/down vibe)
song6 = Song.create(genre: "Country", artist: "Tim McGraw", title: "It's Your Love", album_img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/It%27syourlove.jpg/220px-It%27syourlove.jpg")
song7 = Song.create(genre: "Country", artist: "Carrie Underwood", title: "Drinking Alone", album_img_url: "https://upload.wikimedia.org/wikipedia/en/5/57/Carrie_Underwood%2C_Drinking_Alone_single_cover_art.jpg")
song8 = Song.create(genre: "Country", artist: "Brad Paisley", title: "Whiskey Lullaby", album_img_url: "https://upload.wikimedia.org/wikipedia/en/a/a2/Brad_Paisley_Whiskey_Lullaby.jpg")
song9 = Song.create(genre: "Country", artist: "Keith Urban", title: "Only You Can Love Me This Way", album_img_url: "https://images-na.ssl-images-amazon.com/images/I/81lleqz5QXL._SL1400_.jpg")
song10 = Song.create(genre: "Country", artist: "Blake Shelton", title: "Boys 'Round Here", album_img_url: "https://upload.wikimedia.org/wikipedia/en/e/e3/Blake_Shelton_Boys_%27Round_Here.jpg")

puts "Creating posts..."
post1 = Post.create(user_id: user2.id, song_id: song1.id, thoughts: "Totally what I needed to vibe out to rn", likes: 9)
post2 = Post.create(user_id: user3.id, song_id: song2.id, thoughts: "Didn't think I'd like this, now I can't stop listening!", likes: 6)
post3 = Post.create(user_id: user4.id, song_id: song3.id, thoughts: "This quiz knows me better than I know myself...", likes: 11)
post4 = Post.create(user_id: user5.id, song_id: song4.id, thoughts: "Everybody should listen to this. Period.", likes: 9)

puts "Creating comments..."
# This is user3 (Bri) commenting on the first post, which is user2's (Sean)
comment1 = Comment.create(user_id: user3.id, post_id: post1.id, content: "Nice!")

# This is user4 (Jaz) commenting on the second post, which is user3's (Bri)
comment2 = Comment.create(user_id: user4.id, post_id: post2.id, content: "Not for me but glad you liked it!")

# This is user5 (Garrett) commenting on the third post, which is user4's (Jaz)
comment3 = Comment.create(user_id: user5.id, post_id: post3.id, content: "Downloading this RIGHT now.")

# This is user2 (Sean) commenting on the fourth post, which is user5's (Garrett)
comment4 = Comment.create(user_id: user2.id, post_id: post4.id, content: "This is a good song bro.")









puts "Creating quiz..."
quiz1 = Quiz.create(topic: "Music")

puts "Creating questions..."
question1 = Question.create(content: "'1' being awful, and '4' being amazing, how was your day?")

puts "Creating quiz_questions..."
quiz_question1 = QuizQuestion.create(quiz_id: quiz1.id, question_id: question1.id)

puts "Creating question_answers..."
# Answers to first question (1-4 awful-amazing)
question_answer1 = QuestionAnswer.create(question_id: question1.id, content: "1")
question_answer2 = QuestionAnswer.create(question_id: question1.id, content: "2")
question_answer3 = QuestionAnswer.create(question_id: question1.id, content: "3")
question_answer4 = QuestionAnswer.create(question_id: question1.id, content: "4")

puts "Done! See(d) you later!"