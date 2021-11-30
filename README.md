# Pilot-Success

## Background

The Leadership In Flight Training (LIFT) Academy offers multiple training programs. LIFT Academy works with Republic Airlines through a contract to produce pilots for their airlines. With this contract and student fees, LIFT is a company in between non-profit and for-profit. 

## Goals / Prediction

Create a website with a Student Profitability Calculator based on past graduate information. Raw data was cleaned up, calculated and initiated within machine learning, using the RandomForestRegressor model. On the website, the user inputs Course Name, Start Month, Number of Previous Classes taken, and Expected Days to Complete to calculate the Expected Flight Hours.  


## Foundation

LIFT Academy provided a Graduate Roster which included person id, student name, course short name, course start date, course end date, course flight hours, and end to end course days. To protect past student privacy, student name was deleted. After cleaning the data, end columns were course short name, start month, course flight hours, end to end course days, and course count (per student id) and exported to a new csv file. This new file was then taken to initiate machine learning. Through testing, it was determined RandomForestRegressor was the best model with the following results: 
- Training Score of 0.991 
- Testing Score of 0.938 
- Root squared error (RMSE) of 10.150 
- R-squared (R2) of 0.938

The model was saved with use of pickle to use when building the website. Website was built using javascript and css 

## Prospects

In the future, exact monetary amounts per class can be added to better see the financial side of student commitment. In addition, more data can be compiled and added to the machine learning model to determine time dedication needed to fulfill the contract with Republic Airlines plus instructors needed to keep onboard at LIFT Academy. 

### Presentation 
![View Presentation](https://github.com/JakeRose689/Pilot-Success/blob/staceyj118/Pilot%20Success%20Google%20Presentation.pdf)

### Contributors

* Andy: https://github.com/andyob715
* Jake: https://github.com/JakeRose689
* Stacey: https://github.com/staceyj118 
