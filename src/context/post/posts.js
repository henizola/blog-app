export const postData = [
	{
		kind: 'personal-blog',
		id: '1',
		profile: '../../assets/users/user1.jpeg',
		name: 'Henok ',
		profilePicture: `data:image/jpeg;base64,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`,
		description: 'Letter to a White Man',
		published: 'mar-12 2020',
		updated: '2020-02-28T04:15:43-08:00',
		posts: {
			content: `It wasn’t until relatively recently that I began to recognize the racist ideas that I’ve carried with me for much of my life. While I’ve still got a lot to learn (and unlearn), I’m beginning to come to grips with my contribution to the continued inequities in America.
			Because I’m not so far removed from those former patterns of thought, I could hear the old me repeating tired platitudes as I watched the tragic video of George Floyd’s murder and the nationwide protests that followed. As an exercise in further personal growth, and in an effort to speak to those with backgrounds like me, I’ve written a letter to my former self to help him process these current events.
			— — — — — —
			Dear Rhett,
			I’ve got some difficult things to say, and I ask that you be open and introspective. If you can, resist the very natural urge to get defensive.
			I know that you’re concerned with justice. You’re determined to believe the facts about the death of George Floyd (or, for that matter, the deaths of Breonna Taylor, Ahmaud Arbury, Philando Castile, Freddie Gray, Tamir Rice, Michael Brown, Eric Garner, and more). When it comes to the resulting public outcry and protests, you believe your thinking is based in logic and good faith. But, I challenge you to consider that the way that you see these events is largely rooted in your Whiteness.`,
			likes: ['henok', 'zelalem'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],

			img: `https://images.unsplash.com/photo-1541436293327-8f104af135eb?ixlib=rb-1.2.1&w=1000&q=80`,
			length: 3,
			saved: false,
		},
	},
	{
		kind: 'vs-code#programing',
		id: '2',
		profile: '../../assets/users/user1.jpeg',
		name: 'Simon Holdorf',
		description:
			'10 Visual Studio Code Extensions for Frontend Developers in 2020',
		published: 'April 20',
		updated: '2020-02-28T04:15:43-08:00',
		posts: {
			content: `Covid-19 infections continue spreading across the country, it’s become clear that the burden of coronavirus is not being felt equally across racial lines. According to CDC data on Covid-19 hospitalization during the month of March, 33% of hospitalized patients were black despite only being 18% of the surveyed population. And a recent preprint study from Yale School of Medicine found that blacks had a 3.57 times higher risk of dying from Covid-19 than whites. For Latinos, the risk was 1.88 times higher.
			It’s been noted that Blacks and Latinos are more likely to be essential workers, which means they may be at a higher risk for exposure to the coronavirus. But experts say much of the racial disparity being observed in Covid-19 infections and deaths can actually be traced to pre-existing racial inequities related to so-called “social determinants of health.” “Level of educational attainment, neighborhood resources, employment status, and ability to earn a living wage are all social determinants of health in the United States,” explains Jessie Marshall, MD, an associate professor at the University of Michigan, adding that “racism is driving the racial disparities that we see.”
			Racial inequities lead to higher Covid-19 morbidity
			Majority black neighborhoods in the U.S. are more likely to lack access to supermarkets and more likely to have fast food restaurants as compared to majority white neighborhoods, which are both strongly correlated with higher risk of obesity and poorer dietary consumption. Those neighborhoods are also less likely to have the physical infrastructure, such as parks or sidewalks, that promote physical activity. “We know that if you’re not physically active and you have more of a sedentary lifestyle, that increases your chances of having chronic diseases like obesity and diabetes or high blood pressure,” Marshall explained. For example, African Americans are 40% more likely than whites to have high blood pressure and 60% more likely than whites to have been diagnosed with diabetes.
			Predominantly black neighborhoods also suffer from poor access to health care. Majority African American zip codes are 67% more likely to experience a shortage of primary care physicians.
			As a result, black Americans are at higher risk for the kinds of chronic diseases that are associated with more severe Covid-19 illness, such as diabetes, obesity, kidney failure, or serious heart conditions.
			The importance of community health workers during Covid-19 and beyond
			Marshall predicts that public health officials will be dealing with Covid-19 for at least two years. “There are immediate interventions that need to be done to quell these disparities as well as more long-term, post-pandemic interventions to prevent these disparities from happening in the future,” she says.
			One central idea that may provide both short- and long-term solutions is to expand the use of community health workers in under-resourced communities. The American Public Health Association defines community health workers as public health workers who are either members of the community being served and/or have a specific understanding of the community. They are lay people who have been trained to provide various services including coaching to improve health behaviors, care coordination, and patient advocacy.
			Research has repeatedly shown that community health workers play an important role in the lives of disadvantaged patients.
			“In the immigrant communities I am working with, their source of information is not the CDC or the World Health Organization.”
			In a 2011 study researchers examined the impact of community health workers on diabetes management among 164 African American and Latino adult participants recruited from health systems in Detroit, Michigan. Members of the intervention group were assigned community health workers who provided diabetes self-management education, regular home visits, as well as accompanying participants to clinic visits during the study period.
			Participants who were assigned a community health worker showed a reduction in blood glucose levels compared to no change among the control group. Patients who were assigned a community health worker also showed greater improvement in understanding their condition.
			A bridge between communities and third parties
			Bernice Rumala, PhD, who has worked as a community health worker for the United Nations and currently works as a health equity consultant, is currently observing firsthand how community health workers are helping to address coronavirus in vulnerable communities. “If you’ve dealt with systemic racism or encountered issues with navigating the health care system, you’re not likely to have the same trust level with accessing information from those sources, but you will turn to the community,” she says. “In the immigrant communities I am working with, their source of information is not the CDC or the World Health Organization. Their trusted source of information is myself and other community health workers. There are access barriers in terms of internet access but there are also questions of whether those sources can be trusted.”
			“When you have members of the community talking to fellow community members and delivering public health messages, they’re better received and more likely to be adhered to.”
			Community health workers are also able to act as a bridge between communities and third parties. Rumala recently co-authored a case study detailing how community health workers were able to successfully advocate for Covid-19 testing at a fruit packing plant after being contacted by plant employees who were concerned about spread of the virus. Community health workers have also been effectively utilized to provide instructions to patients on how to properly quarantine.
			Marshall agrees that community health workers are uniquely positioned to help communicate health information. “When you have members of the community talking to fellow community members and delivering public health messages, they’re better received and more likely to be adhered to than messages from government institutions,” she says.
			Tackling the underlying systemic racism that causes health inequities
			Experts in health equity also want to see more legislative solutions aimed at mitigating the conditions that have led to such high rates of chronic diseases, and therefore a disproportionate burden of Covid-19 complications. “Chronic disease can be prevented; it is not inevitable that people will get diabetes or hypertension,” says Alicia Fernandez, the director of the Latinx Center of Excellence at the University of California San Francisco.“One step is to improve living conditions in cities including a living wage so that people can afford better foods.” She is also a champion of policies that aim to decrease sugar consumption through taxes on sugar sweetened beverages.
			Marshall would also like to see a change in the narrative around racial health disparities. “You have government officials and others saying ‘If Black people would eat healthier and exercise more they wouldn’t have some of the chronic diseases that put them at higher risk for complications from Covid-19,’” she explains. “That in and of itself is true. However, when you start from that point it gives the false sense that those who are most affected are at fault when in reality they’re dealing with disparities (such as food deserts) that are impacting them.”
			Ultimately, experts agree that addressing health inequities will require tackling the underlying systemic racism that caused them. “This country was founded on racism and we see the stark realities of how this has even impacted our health system,” says Rumala. “Just 100 to 200 years ago [blacks] couldn’t even see a doctor. We see there’s this perpetuation of the systemic racism and inequities within not only the health care system, but within social determinants of health.”
			Marshall agrees. “Policy is the vaccine for chronic disease. These inequities did not get set in place overnight. There has to be a commitment to destructing [the] racial inequities that we have in our society.” `,

			likes: ['henok', 'zelalem'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `data:image/jpeg;base64,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`,
			length: 6,
			saved: false,
		},
	},
	{
		kind: 'javascript#programing',
		id: '3',
		profile: '../../assets/users/user1.jpeg',
		name: 'John Au-Yeung',
		description: 'JavaScript Best Practices — Code Organization',
		published: 'June-1',
		updated: '2020-02-28T04:15:43-08:00',
		posts: {
			content: `Covid-19 infections continue spreading across the country, it’s become clear that the burden of coronavirus is not being felt equally across racial lines. According to CDC data on Covid-19 hospitalization during the month of March, 33% of hospitalized patients were black despite only being 18% of the surveyed population. And a recent preprint study from Yale School of Medicine found that blacks had a 3.57 times higher risk of dying from Covid-19 than whites. For Latinos, the risk was 1.88 times higher.
			It’s been noted that Blacks and Latinos are more likely to be essential workers, which means they may be at a higher risk for exposure to the coronavirus. But experts say much of the racial disparity being observed in Covid-19 infections and deaths can actually be traced to pre-existing racial inequities related to so-called “social determinants of health.” “Level of educational attainment, neighborhood resources, employment status, and ability to earn a living wage are all social determinants of health in the United States,” explains Jessie Marshall, MD, an associate professor at the University of Michigan, adding that “racism is driving the racial disparities that we see.”
			Racial inequities lead to higher Covid-19 morbidity
			Majority black neighborhoods in the U.S. are more likely to lack access to supermarkets and more likely to have fast food restaurants as compared to majority white neighborhoods, which are both strongly correlated with higher risk of obesity and poorer dietary consumption. Those neighborhoods are also less likely to have the physical infrastructure, such as parks or sidewalks, that promote physical activity. “We know that if you’re not physically active and you have more of a sedentary lifestyle, that increases your chances of having chronic diseases like obesity and diabetes or high blood pressure,” Marshall explained. For example, African Americans are 40% more likely than whites to have high blood pressure and 60% more likely than whites to have been diagnosed with diabetes.
			Predominantly black neighborhoods also suffer from poor access to health care. Majority African American zip codes are 67% more likely to experience a shortage of primary care physicians.
			As a result, black Americans are at higher risk for the kinds of chronic diseases that are associated with more severe Covid-19 illness, such as diabetes, obesity, kidney failure, or serious heart conditions.
			The importance of community health workers during Covid-19 and beyond
			Marshall predicts that public health officials will be dealing with Covid-19 for at least two years. “There are immediate interventions that need to be done to quell these disparities as well as more long-term, post-pandemic interventions to prevent these disparities from happening in the future,” she says.
			One central idea that may provide both short- and long-term solutions is to expand the use of community health workers in under-resourced communities. The American Public Health Association defines community health workers as public health workers who are either members of the community being served and/or have a specific understanding of the community. They are lay people who have been trained to provide various services including coaching to improve health behaviors, care coordination, and patient advocacy.
			Research has repeatedly shown that community health workers play an important role in the lives of disadvantaged patients.
			“In the immigrant communities I am working with, their source of information is not the CDC or the World Health Organization.”
			In a 2011 study researchers examined the impact of community health workers on diabetes management among 164 African American and Latino adult participants recruited from health systems in Detroit, Michigan. Members of the intervention group were assigned community health workers who provided diabetes self-management education, regular home visits, as well as accompanying participants to clinic visits during the study period.
			Participants who were assigned a community health worker showed a reduction in blood glucose levels compared to no change among the control group. Patients who were assigned a community health worker also showed greater improvement in understanding their condition.
			A bridge between communities and third parties
			Bernice Rumala, PhD, who has worked as a community health worker for the United Nations and currently works as a health equity consultant, is currently observing firsthand how community health workers are helping to address coronavirus in vulnerable communities. “If you’ve dealt with systemic racism or encountered issues with navigating the health care system, you’re not likely to have the same trust level with accessing information from those sources, but you will turn to the community,” she says. “In the immigrant communities I am working with, their source of information is not the CDC or the World Health Organization. Their trusted source of information is myself and other community health workers. There are access barriers in terms of internet access but there are also questions of whether those sources can be trusted.”
			“When you have members of the community talking to fellow community members and delivering public health messages, they’re better received and more likely to be adhered to.”
			Community health workers are also able to act as a bridge between communities and third parties. Rumala recently co-authored a case study detailing how community health workers were able to successfully advocate for Covid-19 testing at a fruit packing plant after being contacted by plant employees who were concerned about spread of the virus. Community health workers have also been effectively utilized to provide instructions to patients on how to properly quarantine.
			Marshall agrees that community health workers are uniquely positioned to help communicate health information. “When you have members of the community talking to fellow community members and delivering public health messages, they’re better received and more likely to be adhered to than messages from government institutions,” she says.
			Tackling the underlying systemic racism that causes health inequities
			Experts in health equity also want to see more legislative solutions aimed at mitigating the conditions that have led to such high rates of chronic diseases, and therefore a disproportionate burden of Covid-19 complications. “Chronic disease can be prevented; it is not inevitable that people will get diabetes or hypertension,” says Alicia Fernandez, the director of the Latinx Center of Excellence at the University of California San Francisco.“One step is to improve living conditions in cities including a living wage so that people can afford better foods.” She is also a champion of policies that aim to decrease sugar consumption through taxes on sugar sweetened beverages.
			Marshall would also like to see a change in the narrative around racial health disparities. “You have government officials and others saying ‘If Black people would eat healthier and exercise more they wouldn’t have some of the chronic diseases that put them at higher risk for complications from Covid-19,’” she explains. “That in and of itself is true. However, when you start from that point it gives the false sense that those who are most affected are at fault when in reality they’re dealing with disparities (such as food deserts) that are impacting them.”
			Ultimately, experts agree that addressing health inequities will require tackling the underlying systemic racism that caused them. “This country was founded on racism and we see the stark realities of how this has even impacted our health system,” says Rumala. “Just 100 to 200 years ago [blacks] couldn’t even see a doctor. We see there’s this perpetuation of the systemic racism and inequities within not only the health care system, but within social determinants of health.”
			Marshall agrees. “Policy is the vaccine for chronic disease. These inequities did not get set in place overnight. There has to be a commitment to destructing [the] racial inequities that we have in our society.” `,

			likes: ['henok', 'zelalem', 'endashaw'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `https://miro.medium.com/max/1400/0*9vfs4pt-y0ydoQJq`,
			length: 4,
			saved: false,
		},
	},
	{
		kind: 'blogger#blog',
		id: '23992588',
		profile: '../../assets/users/user1.jpeg',
		name: 'The Educative Team',
		description:
			'How to Design a Web Application: Software Architecture 101',
		published: 'April 1',
		updated: '2020-02-28T04:15:43-08:00',
		posts: {
			content: `It wasn’t until relatively recently that I began to recognize the racist ideas that I’ve carried with me for much of my life. While I’ve still got a lot to learn (and unlearn), I’m beginning to come to grips with my contribution to the continued inequities in America.
			Because I’m not so far removed from those former patterns of thought, I could hear the old me repeating tired platitudes as I watched the tragic video of George Floyd’s murder and the nationwide protests that followed. As an exercise in further personal growth, and in an effort to speak to those with backgrounds like me, I’ve written a letter to my former self to help him process these current events.
			— — — — — —
			Dear Rhett,
			I’ve got some difficult things to say, and I ask that you be open and introspective. If you can, resist the very natural urge to get defensive.
			I know that you’re concerned with justice. You’re determined to believe the facts about the death of George Floyd (or, for that matter, the deaths of Breonna Taylor, Ahmaud Arbury, Philando Castile, Freddie Gray, Tamir Rice, Michael Brown, Eric Garner, and more). When it comes to the resulting public outcry and protests, you believe your thinking is based in logic and good faith. But, I challenge you to consider that the way that you see these events is largely rooted in your Whiteness.`,

			highlight: `Stand up for what’s right. But first, make sure you look in the mirror long enough to see what’s wrong.`,
			likes: [
				'henok',
				'zelalem',
				'henok',
				'zelalem',
				'henok',
				'zelalem',
				'henok',
				'zelalem',
			],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `https://miro.medium.com/max/1400/1*bQe960Y3LAK8ov671B-DpQ.png`,
			length: 7,
			saved: false,
		},
	},
	{
		kind: 'blogger#blog',
		id: '23992588',
		profile: '../../assets/users/user1.jpeg',
		name: 'Simon Holdorf',
		description: '10 Must-Read Books for Software Engineers',
		published: 'april 25',
		updated: '2020-02-28T04:15:43-08:00',
		posts: {
			content: `Covid-19 infections continue spreading across the country, it’s become clear that the burden of coronavirus is not being felt equally across racial lines. According to CDC data on Covid-19 hospitalization during the month of March, 33% of hospitalized patients were black despite only being 18% of the surveyed population. And a recent preprint study from Yale School of Medicine found that blacks had a 3.57 times higher risk of dying from Covid-19 than whites. For Latinos, the risk was 1.88 times higher.
			It’s been noted that Blacks and Latinos are more likely to be essential workers, which means they may be at a higher risk for exposure to the coronavirus. But experts say much of the racial disparity being observed in Covid-19 infections and deaths can actually be traced to pre-existing racial inequities related to so-called “social determinants of health.” “Level of educational attainment, neighborhood resources, employment status, and ability to earn a living wage are all social determinants of health in the United States,” explains Jessie Marshall, MD, an associate professor at the University of Michigan, adding that “racism is driving the racial disparities that we see.”
			Racial inequities lead to higher Covid-19 morbidity
			Majority black neighborhoods in the U.S. are more likely to lack access to supermarkets and more likely to have fast food restaurants as compared to majority white neighborhoods, which are both strongly correlated with higher risk of obesity and poorer dietary consumption. Those neighborhoods are also less likely to have the physical infrastructure, such as parks or sidewalks, that promote physical activity. “We know that if you’re not physically active and you have more of a sedentary lifestyle, that increases your chances of having chronic diseases like obesity and diabetes or high blood pressure,” Marshall explained. For example, African Americans are 40% more likely than whites to have high blood pressure and 60% more likely than whites to have been diagnosed with diabetes.
			Predominantly black neighborhoods also suffer from poor access to health care. Majority African American zip codes are 67% more likely to experience a shortage of primary care physicians.
			As a result, black Americans are at higher risk for the kinds of chronic diseases that are associated with more severe Covid-19 illness, such as diabetes, obesity, kidney failure, or serious heart conditions.
			The importance of community health workers during Covid-19 and beyond
			Marshall predicts that public health officials will be dealing with Covid-19 for at least two years. “There are immediate interventions that need to be done to quell these disparities as well as more long-term, post-pandemic interventions to prevent these disparities from happening in the future,” she says.
			One central idea that may provide both short- and long-term solutions is to expand the use of community health workers in under-resourced communities. The American Public Health Association defines community health workers as public health workers who are either members of the community being served and/or have a specific understanding of the community. They are lay people who have been trained to provide various services including coaching to improve health behaviors, care coordination, and patient advocacy.
			Research has repeatedly shown that community health workers play an important role in the lives of disadvantaged patients.
			“In the immigrant communities I am working with, their source of information is not the CDC or the World Health Organization.”
			In a 2011 study researchers examined the impact of community health workers on diabetes management among 164 African American and Latino adult participants recruited from health systems in Detroit, Michigan. Members of the intervention group were assigned community health workers who provided diabetes self-management education, regular home visits, as well as accompanying participants to clinic visits during the study period.
			Participants who were assigned a community health worker showed a reduction in blood glucose levels compared to no change among the control group. Patients who were assigned a community health worker also showed greater improvement in understanding their condition.
			A bridge between communities and third parties
			Bernice Rumala, PhD, who has worked as a community health worker for the United Nations and currently works as a health equity consultant, is currently observing firsthand how community health workers are helping to address coronavirus in vulnerable communities. “If you’ve dealt with systemic racism or encountered issues with navigating the health care system, you’re not likely to have the same trust level with accessing information from those sources, but you will turn to the community,” she says. “In the immigrant communities I am working with, their source of information is not the CDC or the World Health Organization. Their trusted source of information is myself and other community health workers. There are access barriers in terms of internet access but there are also questions of whether those sources can be trusted.”
			“When you have members of the community talking to fellow community members and delivering public health messages, they’re better received and more likely to be adhered to.”
			Community health workers are also able to act as a bridge between communities and third parties. Rumala recently co-authored a case study detailing how community health workers were able to successfully advocate for Covid-19 testing at a fruit packing plant after being contacted by plant employees who were concerned about spread of the virus. Community health workers have also been effectively utilized to provide instructions to patients on how to properly quarantine.
			Marshall agrees that community health workers are uniquely positioned to help communicate health information. “When you have members of the community talking to fellow community members and delivering public health messages, they’re better received and more likely to be adhered to than messages from government institutions,” she says.
			Tackling the underlying systemic racism that causes health inequities
			Experts in health equity also want to see more legislative solutions aimed at mitigating the conditions that have led to such high rates of chronic diseases, and therefore a disproportionate burden of Covid-19 complications. “Chronic disease can be prevented; it is not inevitable that people will get diabetes or hypertension,” says Alicia Fernandez, the director of the Latinx Center of Excellence at the University of California San Francisco.“One step is to improve living conditions in cities including a living wage so that people can afford better foods.” She is also a champion of policies that aim to decrease sugar consumption through taxes on sugar sweetened beverages.
			Marshall would also like to see a change in the narrative around racial health disparities. “You have government officials and others saying ‘If Black people would eat healthier and exercise more they wouldn’t have some of the chronic diseases that put them at higher risk for complications from Covid-19,’” she explains. “That in and of itself is true. However, when you start from that point it gives the false sense that those who are most affected are at fault when in reality they’re dealing with disparities (such as food deserts) that are impacting them.”
			Ultimately, experts agree that addressing health inequities will require tackling the underlying systemic racism that caused them. “This country was founded on racism and we see the stark realities of how this has even impacted our health system,” says Rumala. “Just 100 to 200 years ago [blacks] couldn’t even see a doctor. We see there’s this perpetuation of the systemic racism and inequities within not only the health care system, but within social determinants of health.”
			Marshall agrees. “Policy is the vaccine for chronic disease. These inequities did not get set in place overnight. There has to be a commitment to destructing [the] racial inequities that we have in our society.” `,

			highlight: `Getting better as an engineer is as much about reading code as it is about writing it`,
			likes: ['henok', 'zelalem'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `https://miro.medium.com/max/1400/1*73NFzEe6PDGLlIUylvJfUw.jpeg`,
			length: 5,
			saved: true,
		},
	},
	{
		kind: 'blogger#blog',
		id: '23992588',
		profile: '../../assets/users/user1.jpeg',
		name: 'Mahdhi Rezvi',
		description:
			'ES2020 Has Been Finalized. Here is What I’m Excited About',
		published: 'may 19',
		time: '6',
		posts: {
			content: `JavaScript has been evolving very rapidly in recent years. Especially after the release of ES6 in 2015, things have been great. A lot of new features were being proposed to be included in the ES2020 version.
			The good news is that these proposals have been finalized. We now have a finalized list of features we can eagerly expect in ES2020 when it is released after approval. Some of these features have excited me greatly, as I have been having so much trouble writing code before their existence. Let us see what these are.
			Features That Excite Me the Most
			Optional Chaining
			This is one of the most exciting features of ES2020 for me personally. I have written a lot of programs that would have benefitted immensely with this new feature.
			Optional Chaining allows you to safely access deeply nested properties of an object without having to check for the existence of each of them. Let’s see how this feature would help us.`,
			likes: ['henok', 'zelalem'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `https://miro.medium.com/max/2000/0*pOjhABuagXCAkgNH`,
			length: 6,
			saved: false,
		},
	},
	{
		kind: 'blogger#blog',
		id: '23992588',
		profile: '../../assets/users/user1.jpeg',
		name: 'Robert Roy Britt',
		description: 'Get Ready for a Long, Hot, Coronavirus Summer',
		published: 'jan 19',
		time: '6',
		posts: {
			content: `Hopes for a summer respite from Covid-19 have been dashed. In several states, the number of new cases is rising significantly as the coronavirus seeps into the nation’s small towns and rural areas and shows no signs of taking the summer off.
			In fact, the nationwide decline in “the curve” of daily new cases, from a peak of 35,000 in early April to around 20,000 in recent weeks, has been obfuscated by the fact that four states with 40% of the nationwide case total — New York, New Jersey, Massachusetts, and Illinois — experienced significant declines.
			“That is hiding the fact that the majority of other states are either increasing their numbers or fluctuating in fits and starts around a peak,” says Mark Cameron, PhD, an immunologist and medical researcher in the School of Medicine at Case Western Reserve University in Ohio. “Our victory lap has started too quickly.”
			The nationwide curve was flattened thanks to stay-at-home orders and other preventive measures, Cameron says. But rather than continuing to bend the curve down, as many other countries have done, ours is on a “disappointing plateau,” he says, a “slow burn” that’s putting seeds of the virus in every nook and cranny of the country.
			That means the current wave of infections could be far from over, Cameron says. It might simply persist at current daily case levels, or even possibly swell this summer and then, if it recedes at all, roar back as a larger wave this fall.
			“Any truly naive population or community that has not seen the virus yet is a perfect opportunity for the virus to enter and spread unmitigated,” Cameron tells Elemental. “The virus wants to survive.”
			“Our victory lap has started too quickly.”
			Case counts rising
			The daily case count was rising in 21 states and Puerto Rico as of June 9. Among the starkest increases:
			California: Averaging more than 2,000 new cases daily, roughly double the pace in mid-April.
			North Carolina: Averaging just over 1,000, twice the rate of mid-May.
			Arizona: Exceeded 1,000 for the first time on June 1, with current daily average roughly double compared to mid-May.
			Arizona’s largest health system, Banner Health, says it will run out of ICU beds if the current trend continues, and on June 6 the state’s health director told hospitals to “fully activate” emergency plans.
			“Arkansas hospitalizations are up 180% over the last 28 days, 49% this week alone,” Andy Slavitt, former acting administrator of the Centers for Medicare and Medicaid Services, said in a tweet. “Hospital capacity appears to be a concern at least in some parts of the state… New cases are doubling between 2–3 weeks.”
			Other states with stark upward trends include Florida, South Carolina, Texas, and Utah.
			The fresh wave of cases is likely to be followed in coming days and weeks by increased hospitalizations and higher numbers of serious cases, experts say, and that could challenge the response capability of small towns and rural areas particularly, where there may be just one hospital or none, and fewer health care professionals and first responders.
			Loosened restrictions allow the virus to spread
			Total diagnosed U.S. Covid-19 cases are near 2 million with more than 111,000 deaths. Global cases now exceed 7.1 million with more than 400,000 deaths. But it could have been even worse by now. Shutdowns and other measures enacted to slow the spread of coronavirus prevented 60 million additional cases in the U.S. and China, according to a study published June 8 by the journal Nature.
			But already there’s been a “Memorial Day bounce” in new U.S. cases, which showed up five to seven days after the holiday weekend, Cameron says. (The virus typically incubates for that long before symptoms appear.)
			Loosened restrictions “have allowed the virus to escape again, and we’re just now starting to see the accumulation of those new case counts showing as upticks in a lot of states,” he says. And while it’s too soon to know the extent to which mass protests might be contributing further spread, Cameron and others acknowledge they likely will have an effect.
			However, one reason viruses like influenza tend to spread less in summer is because people spend less time in crowded indoor spaces, where a virus can hop from person to person with relative ease, and more time outdoors and spread out. Cameron is pleased to see many people still wearing masks, including during protests, and others choosing to stay home and social distance. And he sees some cause for optimism that fresh clusters of U.S. cases have not yet snowballed into massive outbreaks.
			Virus spread also typically drops in summer because heat and humidity reduce the virulence of the microbes — that’s seen with influenza, for example. It’s typically true with coronaviruses, too, but rising cases in Florida and Arizona have shown that this coronavirus won’t be significantly dampened by the seasons.
			And the more cases there are this summer, the more the virus has a head start to launch ever more infections when cooler weather comes, pushing the summer wave higher or, if there’s been a modest dip, generating a whole new, larger wave. “This does not bode well at all for preventing a true resurgence in the fall,” `,
			likes: ['henok', 'zelalem'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `https://miro.medium.com/max/1400/1*vkXF5QY8Z2C9kH0o8cMKDw.jpeg`,
			length: 6,
			saved: true,
		},
	},
	{
		kind: 'blogger#blog',
		id: '23992588',
		profile: '../../assets/users/user1.jpeg',
		name: 'Markham Heid',
		description: 'Can We Hug Yet?',
		published: 'feb 19',
		time: '6',
		posts: {
			content: `the start of the pandemic, hugs wouldn’t have ranked high on most people’s list of major deprivations. But after months of social distancing, a lot of grandparents, siblings, and loved ones are surely desperate to give one another a good squeeze.
			There’s evidence that this urge to hug has deep biological roots. The skin is the human body’s largest sensory organ, as well as the first to develop in utero; we all feel life before we can see, smell, hear, or taste it. Research on newborn-parent interactions has found that a mother’s nurturing touch — holding, cuddling, massaging — plays an important role in infant development and behavior, and the benefits of physical affection seem to persist throughout life. Studies on both kids and adults have found that holding hands, hugging, and other forms of affectionate touching can ease stress and induce measurable reductions in heart rate and blood pressure.
			All this helps explain why eschewing hugs may come with real health consequences — especially for those who are isolated from others. But to curb the spread of Covid-19, the CDC and other public health authorities recommend social-distancing measures that discourage hugging.
			While some experts agree with these guidelines, others say hugging — especially if people take a few simple precautions — may be a relatively low-risk, high-reward activity.
			“If you’re going to hug, just agree not to talk while you’re doing it. And your faces should be lateral — so cheek to cheek.”
			What makes a hug “safe?”
			Many of the current Covid-19 guidelines are based on science’s understanding of other viruses. When it comes to the novel coronavirus, specifically, the research is inchoate and evolving day to day. This makes it hard for experts to nail down the true risks associated with different behaviors, and not all agree on hugging’s position in the risk hierarchy.
			“I never stopped hugging,” says Shanina Knighton, PhD, a researcher, nurse, and infection prevention expert at Case Western Reserve University in Cleveland, Ohio. Knighton says that there is no conclusive data showing that hugging can transmit Covid-19, and that her understanding of how viruses spread suggests that hugging is a low-risk activity — especially if neither person is showing symptoms.
			“You do have to be purposeful about how you do it,” she says. For example, talking or exhaling directly into someone’s face during a hug is a bad idea, especially if someone is symptomatic and neither person is wearing a mask. “If you’re going to hug, just agree not to talk while you’re doing it,” she advises. “And your faces should be lateral — so cheek to cheek.”
			This advice is in line with the opinions of some other experts. On June 4, the New York Times ran a piece in which an airborne pathogens expert at Virginia Tech used non-coronavirus infection data to model the risk of virus exposure during a hug. That model found that, as long as neither person is talking or coughing during a hug, the risk of transmission is low. The piece also said that keeping embraces short and free of tears is a good idea.
			But not everyone agrees. “I think hugging is a substantial risk,” says John Swartzberg, MD, an infectious diseases expert and emeritus clinical professor at the University of California, Berkeley School of Public Health. Swartzberg says that the Virginia Tech scientist’s conclusions in the Times piece are “perfectly reasonable” based on the available data. The problem is that the available data is woefully incomplete. “For example, we don’t know what the infectious dose is — whether it’s one viral particle or 1 million,” he says. “No one really thinks it’s one particle, but anyone who tells you they know what the right number is, is guessing.”
			Talking or exhaling directly into someone’s face during a hug is a bad idea, especially if someone is symptomatic and neither person is wearing a mask.
			Some research efforts have found that speaking or even breathing can expel virus-containing droplets into the air. “If you’re hugging someone or are in very close proximity, you could inhale those particles,” Swartzberg says. “We know the larger particles we expel tend to drop within six feet, so that’s why we have the six-foot social-distancing rule.”
			While he believes that hugging is hazardous, Swartzberg says that everyone “needs to do their own calculus” when it comes to the risks they’re willing to take. “If you’re talking about two young people hugging, the risk of them getting very sick and dying is small, and for children the risk may be approaching zero,” he says. “But if someone is in their seventies or older, the risk could be exceedingly high.”
			Knighton, meanwhile, says that huggers likely don’t have much to worry about as long as they’re taking the precautions she described above and are also washing their hands before an embrace. Especially if two people are outdoors where, by some estimates, the risk of virus transmission is many times lower than indoors, she says that any risks associated with hugging are outweighed by the benefits.
			“Hugs are essential,” she adds. “They’re an emotional connection we all need.”`,
			likes: ['henok', 'zelalem'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `https://miro.medium.com/max/4724/1*bLrFz2JqIvuMlzttQLzdjA.jpeg`,
			length: 6,
			saved: true,
		},
	},
	{
		kind: 'blogger#blog',
		id: '23992588',
		profile: '../../assets/users/user1.jpeg',
		name: 'Mariana Lenharo',
		description: 'Read This Before You Fly Anywhere',
		published: 'may 19',
		time: '6',
		posts: {
			content: `t’s been five months since I last saw my husband, João. He is currently alone in our apartment in Newark, New Jersey, while I’m staying with my parents in Ourinhos, a small town in the state of São Paulo, Brazil. Due to U.S. immigration procedures, we had been in long-distance relationship mode even before Covid-19, but at least the situation was eased by the perspective of him visiting me in Brazil every three months.
			Then, the pandemic hit, and his plans of spending Easter in Brazil were abruptly shattered. We suddenly found ourselves heavily quarantined in our respective homes, hoping that this would all be over before summer. Now it’s June, and we have been pondering whether my husband should make his way down to Brazil for a summer vacation. How risky would it be for him to go through the hurdles of airport security, and then board a likely crowded plane to land in São Paulo nine hours later?
			João and I are far from being the only ones facing this dilemma. Many people wonder whether they should board a plane and travel this summer. Here are some of the things we’ve learned that might help you make an informed decision.
			If you’re traveling internationally, find out where you’re allowed to fly from and to
			Brazil has currently the second-highest number of Covid-19 cases in the world, and the numbers are going up fast. President Donald Trump has recently issued a travel ban on most travelers coming from Brazil. This leaves us with yet another preoccupation: If João is, in fact, able to come, will he be able to go back to the United States?
			The same question goes for other destinations subject to suspension of entry to the United States, such as China, Iran, the United Kingdom, Ireland, and most other countries in Europe.
			If you are not sure whether there are Covid-19-related travel regulations in place for your destination, you can access an interactive map on the website of the International Air Transport Association (IATA) Travel Center. Just click on any country to find out about possible restrictions.
			The U.S. State Department’s Bureau of Consular Affairs also keeps a color-coded map that shows the latest U.S. travel advisories for every country in the world, including (but not limited to) Covid-19-related recommendations. In addition to this, you can subscribe to a service — the Smart Traveler Enrollment Program (STEP) — to receive the latest travel advisories and local safety and security information for your destination via email.
			The general recommendation on international travel issued by the Centers for Disease Control and Prevention (CDC) is to avoid nonessential trips and the agency cites that many countries are implementing travel restrictions and closing borders with little advance notice. For domestic travel, there are no restrictions in place, although some states may require out-of-state travelers to complete a 14-day self-quarantine, such as Maine. The CDC advises domestic travelers to check your destination’s state health department for up-to-date guidance.
			“The fact that we have not seen large groups being reported as having exposure occurring in flight is quite reassuring.”
			Don’t let the antibody test result make a decision for you
			While mulling over the risks of an international trip amid a pandemic, João considered how convenient it would be if he was already immune to the new coronavirus. He decided to take an antibody test, once that became available at the local CityMD. The test came back negative.
			For what it’s worth, a positive result wouldn’t have guaranteed a risk-free journey, either. Results can be a false positive or a false negative, and “even if the result is accurate, I think it’s yet to be proven that a positive result of an antibody test in humans implies true immunity to infections,” says Dr. Henry Wu, director of the Emory TravelWell Center and assistant professor of infectious diseases at Emory University School of Medicine. It’s also not proven that being positive for antibodies means you’ve fully recovered and can no longer transmit the virus, he added.
			Know what you’re in for before boarding the plane (it might not be as bad as you think)
			At first sight, a plane would seem like the perfect incubator for the novel coronavirus, with dozens of people sharing a small space without the possibility of opening the windows.
			But it turns out that the plane’s ventilation system probably makes air travel safer than spending nine hours in an office, for example. The filters used on planes, called high-efficiency particulate air (HEPA) filters, are supposed to take out a large proportion, beyond 99%, of infectious pathogens. According to the CDC, most viruses and other germs do not spread easily on flights because of how air circulates and is filtered. In fact, there are very few reports of respiratory infections in general proven to be acquired on planes.
			During the 2003 SARS outbreak (another severe acute respiratory syndrome also caused by a type of coronavirus), biologist Luciano Kleber de Souza Luna and his colleagues at the Bernhard Nocht Institute for Tropical Medicine in Hamburg, studied passengers arriving in Germany after intercontinental air travel who developed symptoms of SARS. Researchers tested their samples for different types of viruses and bacteria and found that almost half of them had one of the pathogens. Interestingly though, the infected patients were all scattered on different flights. “We couldn’t identify any cluster of passengers with the same virus on the same flight,” said Luna. This suggested that the infected travelers probably didn’t acquire the pathogen during the flight nor transmitted it to their fellow passengers on the plane.
			When it comes to Covid-19, although there’s no hard data, there is no strong evidence of transmission aboard an aircraft. “So far, I haven’t read convincing reports that confirm that it has happened,” said Lin H. Chen, president of the International Society of Travel Medicine and associate professor at Harvard Medical School. “The fact that we have not seen large groups being reported as having exposure occurring in flight is quite reassuring. Otherwise, I think we’d be seeing many clusters of people who, say, land in Boston and all come down with coronavirus after their travels.”
			Be careful with publicly used items such as tray tables, seatbelts, seats, and lavatory doorknobs, Chen says, and clean them with sanitizer wipes.
			Protect yourself before and during the flight
			In light of the pandemic, airlines are implementing new safety policies, such as making efforts to limit the number of people on board and block middle seats, loading planes back to front to limit contact among passengers, and intensifying cleaning procedures. Delta Air Lines, for example, announced it will be reducing the total number of passengers in the main cabin to 60% through September 30. United Airlines stated that it will “do their best” to contact passengers 24 hours before departure in case their flight is expected to be fairly full. These passengers will be able to change their flights with no fee. But there are other measures travelers can take to protect themselves before and during a flight.
			Passengers should be alert from the moment they get to the airport as they will face check-in, security, and boarding lines which might bring them in close contact with other travelers and shared objects. Remember to always stay at least six feet apart from other people and use hand sanitizer after touching surfaces like check-in kiosks, luggage trays, and carts. These are basically the same precautions you would take in a supermarket.
			The CDC recommends that everyone wear a cloth face covering over their nose and mouth when in public, including during travel. Wearing disposable gloves, on the other hand, might not be such a good idea. “I don’t routinely recommend gloves in most circumstances. And the reason is, even if the gloves protect your hands from any finger touching a contaminated surface, the gloves themselves are contaminated now,” Wu said.
			After boarding, pay attention to where you’re sitting on the plane. “If you are lucky to get on a plane that’s not full, certainly the airlines are taking every effort to keep passengers as spaced out as possible. However, I have already talked to a number of travelers who have been on flights that were full,” said Wu. So, the possibility of a relatively full flight is real to the point that you may have somebody next to you or in the seat right behind or in front of you. That’s potentially a problem because even an efficient air circulation and filtration system might not protect you if someone sick coughs or sneezes in your close proximity. That’s why it is so important for all passengers to wear a mask during the whole flight and intensify the application of other protective measures that are already advised on land.
			The most important ones are to avoid touching your face and practice careful hand hygiene. “I would advise all travelers to carry with them a small supply of hand sanitizer and I would actually carry it in my pocket. You want easy access to it at any point during the flight,” said Wu. Although hand-washing is generally preferable, Wu said it’s probably not a good idea to get up to go to the lavatory just to wash your hands on the airplane. “You’ll probably risk contaminating them on the way back.”
			Be careful with publicly used items such as tray tables, seatbelts, seats, and lavatory doorknobs, Chen says, and clean them with sanitizer wipes. “So many people have touched these along the way and it may not just be the SARS-CoV-2 we are reducing the potential exposure to, but other microorganisms as well,” said Chen.
			“When you’re visiting family from a different city, you are introducing a potentially very different disease risk.”
			Don’t worry about airplane food
			My husband and I also wondered about eating on the plane. “One consideration would be to just bring your own food and pass on anything that’s being handed out,” says Wu. “However, the major airlines are developing protocols to minimize the risk of contamination of food and obviously their crews are being advised to use strict hand hygiene, as they always should.”
			Also, according to the CDC, there is currently no evidence to support the transmission of Covid-19 associated with food, so passengers should feel reasonably safe eating the airplane food, as long as they use hand sanitizer before and after the meal.
			Be mindful when you get to your final destination
			Even if travel is not restricted from one particular country to another, or if quarantine is not mandatory in certain areas, it’s important to be mindful of your loved ones’ health and recognize when you might be putting them in unnecessary risk.
			“When you’re visiting family from a different city, you are introducing a potentially very different disease risk,” Wu said, adding that if you need to visit family from different areas, it’s important to maintain distance, use masks or face coverings and intensify hand hygiene. “I share the frustration and challenges because my own parents are very elderly and live in a different state. And as much as I would like to visit them, I also recognize that as elderly persons with other medical conditions, it would be extremely dangerous if I were to inadvertently infect them during my visit.”
			As some countries start to reopen while others have growing rates of infection, it gets trickier to provide updated recommendations for travelers about what precautions they should take at their destination. As a rule of thumb, social distancing should be practiced everywhere in the world at this moment, according to Chen.
			If you have any symptoms or believe you had recent contact with someone with Covid-19, consider getting tested right before deciding to travel. Contact your local health authorities to check if you are eligible for free tests. In New York, for example, the test is free if you go to a test site run by the state.
			A final thought
			Air travel, or any travel during a pandemic, isn’t risk-free. “Even without a lot of confirmed case reports, I think the traveling public should assume that there will be some risk. Even if it can be mitigated, the chances are that it cannot be completely eliminated,” said Wu.
			For the moment, my husband and I decided to wait a few more weeks and watch how the pandemic evolves in Brazil and in the United States.
			If he does not come over this summer, it is unclear when we’ll be able to see each other again.`,
			likes: ['henok', 'zelalem'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `https://miro.medium.com/max/1400/1*Tcr_kMTuKV1SDvIOIduEAg.jpeg`,
			length: 6,
			saved: true,
		},
	},
	{
		kind: 'blogger#blog',
		id: '23992588',
		profile: '../../assets/users/user1.jpeg',
		name: 'Erika Stallings',
		description:
			'Systemic Racism Is Killing Black People During the Pandemic',
		published: 'may 19',
		time: '6',
		posts: {
			content: `Covid-19 infections continue spreading across the country, it’s become clear that the burden of coronavirus is not being felt equally across racial lines. According to CDC data on Covid-19 hospitalization during the month of March, 33% of hospitalized patients were black despite only being 18% of the surveyed population. And a recent preprint study from Yale School of Medicine found that blacks had a 3.57 times higher risk of dying from Covid-19 than whites. For Latinos, the risk was 1.88 times higher.
			It’s been noted that Blacks and Latinos are more likely to be essential workers, which means they may be at a higher risk for exposure to the coronavirus. But experts say much of the racial disparity being observed in Covid-19 infections and deaths can actually be traced to pre-existing racial inequities related to so-called “social determinants of health.” “Level of educational attainment, neighborhood resources, employment status, and ability to earn a living wage are all social determinants of health in the United States,” explains Jessie Marshall, MD, an associate professor at the University of Michigan, adding that “racism is driving the racial disparities that we see.”
			Racial inequities lead to higher Covid-19 morbidity
			Majority black neighborhoods in the U.S. are more likely to lack access to supermarkets and more likely to have fast food restaurants as compared to majority white neighborhoods, which are both strongly correlated with higher risk of obesity and poorer dietary consumption. Those neighborhoods are also less likely to have the physical infrastructure, such as parks or sidewalks, that promote physical activity. “We know that if you’re not physically active and you have more of a sedentary lifestyle, that increases your chances of having chronic diseases like obesity and diabetes or high blood pressure,” Marshall explained. For example, African Americans are 40% more likely than whites to have high blood pressure and 60% more likely than whites to have been diagnosed with diabetes.
			Predominantly black neighborhoods also suffer from poor access to health care. Majority African American zip codes are 67% more likely to experience a shortage of primary care physicians.
			As a result, black Americans are at higher risk for the kinds of chronic diseases that are associated with more severe Covid-19 illness, such as diabetes, obesity, kidney failure, or serious heart conditions.
			The importance of community health workers during Covid-19 and beyond
			Marshall predicts that public health officials will be dealing with Covid-19 for at least two years. “There are immediate interventions that need to be done to quell these disparities as well as more long-term, post-pandemic interventions to prevent these disparities from happening in the future,” she says.
			One central idea that may provide both short- and long-term solutions is to expand the use of community health workers in under-resourced communities. The American Public Health Association defines community health workers as public health workers who are either members of the community being served and/or have a specific understanding of the community. They are lay people who have been trained to provide various services including coaching to improve health behaviors, care coordination, and patient advocacy.
			Research has repeatedly shown that community health workers play an important role in the lives of disadvantaged patients.
			“In the immigrant communities I am working with, their source of information is not the CDC or the World Health Organization.”
			In a 2011 study researchers examined the impact of community health workers on diabetes management among 164 African American and Latino adult participants recruited from health systems in Detroit, Michigan. Members of the intervention group were assigned community health workers who provided diabetes self-management education, regular home visits, as well as accompanying participants to clinic visits during the study period.
			Participants who were assigned a community health worker showed a reduction in blood glucose levels compared to no change among the control group. Patients who were assigned a community health worker also showed greater improvement in understanding their condition.
			A bridge between communities and third parties
			Bernice Rumala, PhD, who has worked as a community health worker for the United Nations and currently works as a health equity consultant, is currently observing firsthand how community health workers are helping to address coronavirus in vulnerable communities. “If you’ve dealt with systemic racism or encountered issues with navigating the health care system, you’re not likely to have the same trust level with accessing information from those sources, but you will turn to the community,” she says. “In the immigrant communities I am working with, their source of information is not the CDC or the World Health Organization. Their trusted source of information is myself and other community health workers. There are access barriers in terms of internet access but there are also questions of whether those sources can be trusted.”
			“When you have members of the community talking to fellow community members and delivering public health messages, they’re better received and more likely to be adhered to.”
			Community health workers are also able to act as a bridge between communities and third parties. Rumala recently co-authored a case study detailing how community health workers were able to successfully advocate for Covid-19 testing at a fruit packing plant after being contacted by plant employees who were concerned about spread of the virus. Community health workers have also been effectively utilized to provide instructions to patients on how to properly quarantine.
			Marshall agrees that community health workers are uniquely positioned to help communicate health information. “When you have members of the community talking to fellow community members and delivering public health messages, they’re better received and more likely to be adhered to than messages from government institutions,” she says.
			Tackling the underlying systemic racism that causes health inequities
			Experts in health equity also want to see more legislative solutions aimed at mitigating the conditions that have led to such high rates of chronic diseases, and therefore a disproportionate burden of Covid-19 complications. “Chronic disease can be prevented; it is not inevitable that people will get diabetes or hypertension,” says Alicia Fernandez, the director of the Latinx Center of Excellence at the University of California San Francisco.“One step is to improve living conditions in cities including a living wage so that people can afford better foods.” She is also a champion of policies that aim to decrease sugar consumption through taxes on sugar sweetened beverages.
			Marshall would also like to see a change in the narrative around racial health disparities. “You have government officials and others saying ‘If Black people would eat healthier and exercise more they wouldn’t have some of the chronic diseases that put them at higher risk for complications from Covid-19,’” she explains. “That in and of itself is true. However, when you start from that point it gives the false sense that those who are most affected are at fault when in reality they’re dealing with disparities (such as food deserts) that are impacting them.”
			Ultimately, experts agree that addressing health inequities will require tackling the underlying systemic racism that caused them. “This country was founded on racism and we see the stark realities of how this has even impacted our health system,” says Rumala. “Just 100 to 200 years ago [blacks] couldn’t even see a doctor. We see there’s this perpetuation of the systemic racism and inequities within not only the health care system, but within social determinants of health.”
			Marshall agrees. “Policy is the vaccine for chronic disease. These inequities did not get set in place overnight. There has to be a commitment to destructing [the] racial inequities that we have in our society.” `,
			likes: ['henok', 'zelalem'],
			comments: [
				{
					name: 'henok',
					comment: 'nice thought',
				},
			],
			img: `https://miro.medium.com/max/1400/1*1ND_53zk0KAWOn-iNax6iw.jpeg`,
			length: 6,
			saved: true,
		},
	},
];
