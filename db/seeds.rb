100.times do
  Post.create(title: Faker::Movie.title,
              description: Faker::Movie.quote,
              content: Faker::Lorem.paragraphs)
end
