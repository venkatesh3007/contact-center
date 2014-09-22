namespace :db do
	task populate: :environment do

		Contact.destroy_all

		20.times do
			Contact.create(
				first_name: Faker::Name.first_name,
				last_name: Faker::Name.last_name,
				email: Faker::Internet.email
			)	
		end
	end
end