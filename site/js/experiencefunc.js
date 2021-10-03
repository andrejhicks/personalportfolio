function resume() {
		var exp =[{'Txt': 'WELLS ENGINEER | CHEVRON | JUNE 2013-PRESENT', 'Order': 1},
		{'Txt': 'Wells Engineer | Oct 2019-Present | Houston, Tx', 'Order':2},
		{'Txt': 'Lead Drilling and Completions well planning for unconventional operations in West Texas, which includes risk, cost, procedural, and operation alignment with multiple teams within Chevron and external organizations.', 'Order':3}, 
		{'Txt': 'Provide Completions planning and design support to Drilling Engineers and Asset Team for assigned geographical development areas.', 'Order':3}, 
		{'Txt': 'Finalize the standardization of the Completions Program using a wellview export function and VBA coding for partial automation of the MCBU Completions Procedure.', 'Order':3}, 
		{'Txt': 'Championing MCBU Wells Cost Library, in collaboration with Wells and Supply Chain Management, using an SQL database and Microsoft Power Platform tools for centralization of cost information specific to Wells planning and operations.', 'Order':3}, 
		{'Txt': 'Develop the Completions Project Estimator using Microsoft Power Platform tools for detailed cost estimates.', 'Order':3}, 
		{'Txt': 'Champion Robotic Process Automation for the Mid-Con Business Unit using UIPath. Lead a team of 4 developers to develop valuable solutions to the Drilling and Completions Organization.' , 'Order':3}, 
		{'Txt': 'Technical lead for Chevron Citizen Developer Program The program assists engineers enhance their knowledge of data connections, applications, and processes within the Chevron Low Code/Citizen Developer Environment.', 'Order':3}, 
		{'Txt': 'Well Site Manager | Jan 2018-Oct 2019 | Midland, Tx', 'Order':2}, 
		{'Txt': 'Lead Chevron field operations for hydraulic fracturing, coiled tubing cleanout, well intervention, and fishing operations.', 'Order':3},
		{'Txt': 'Ensure all completions operations meet Chevron design, operation, and safety standards.', 'Order':3},
		{'Txt': 'Provide feedback for modifications to the midland basin coiled tubing standards and performance improvement projects. ', 'Order':3},
		{'Txt': 'Provide feedback for special project planning for Simultaneous Operations, non-standard well operations, and operational roadmaps and decision trees. ', 'Order':3},
		{'Txt': 'Lead coiled tubing operation to save a compromised well using coiled tubing and offline cementing practices. Fully recovered the asset valued at $5 million.', 'Order':3},
		{'Txt': 'Provide support as a Lead Coiled Tubing WSR for to Completions Advisors and Superintendent.', 'Order':3},
		{'Txt': 'Subsea Well Intervention Engineer | August 2015-Jan 2018 | Houston, Tx', 'Order':2},
		{'Txt': 'Developed plans to implement an At-balanced Deepwater MRWO. Project was completed 2% under 39 planned days, and 17% under $52.7MM planned Cost.', 'Order':3},
		{'Txt': 'Develop procedures for HPHT upper completions installations for project costs ranging from $1-$15 million.', 'Order':3},
		{'Txt': 'Improve cost and performance of upper completions activities through technical analysis and improved efficiency of deepwater rig operations.', 'Order':3},
		{'Txt': 'Lead equipment readiness, mobilization, and offshore operations for upper completions activities.', 'Order':3},
		{'Txt': 'Manage ROV, subsea installation, slickline, and surface equipment business partners during the completion and ensure all work is completed safely and efficiently.', 'Order':3}, 
		{'Txt': 'Create 2D AutoCad renderings of equipment layouts for Jack/St. Malo Intervention equipment and activities.', 'Order':3},
		{'Txt': 'Development Wells Engineer | June 2013-August 2015 | Houston, Tx & Midland, Tx', 'Order':2},
		{'Txt': 'Increased the efficiency of drilling while on H&P 355 using historical drilling trend comparative analysis. The work resulted in continuous improvement of the rigs drilling cost and time', 'Order':3},
		{'Txt': 'Created a detailed program in Microsoft Visual Basic to compare and visualize historical drilling parameter data.', 'Order':3}, 
		{'Txt': 'Seconded to Transocean. Worked 3 week offshore rig rotations with Transocean personnel for 9 months.', 'Order':3},
		{'Txt': 'PROCESS ENGINEERING INTERN | ENTERPRISE PRODUCTS | JUNE 2012-AUGUST 2012 | HOUSTON, TX', 'Order':1},
		{'Txt': 'Performed process simulations of cryogenic and amine gas plants using BR&E Promax and Aspen Hysys', 'Order':3},
		{'Txt': 'Assist in capacity calculations for vessels used in hydrocarbon processing plants', 'Order':3},
		{'Txt': 'Used P&IDs to determine instrument location and functionality', 'Order':3},
		{'Txt': 'DESIGN AND R&D ENGINEERING INTERN | VALVTECHNOLOGIES | JAN 2011-MAY 2012 | HOUSTON, TX', 'Order':1},
		{'Txt': 'Designed and modified internal components for bi-directional trunnion valve', 'Order':3},
		{'Txt': 'Design and testing according to ASME and API standards', 'Order':3},
		{'Txt': 'Product Owner for bi-directional trunnion valve', 'Order':3},
		{'Txt': 'Developed test plans and procedures for Research and Development projects', 'Order':3}
		];
 		let htmltextstring="";
		for (let i=0; i<exp.length; i++){
			var row=exp[i];
			var RowTxt=row.Txt;
			if (row.Order==1){
				htmltextstring=htmltextstring + '<h3>' +RowTxt + '</h3><br>';
			}else if (row.Order==2){
				htmltextstring=htmltextstring + '<b>' +RowTxt + '</b><br>';
			}else {
			htmltextstring=htmltextstring + '<li>' +RowTxt + '</li>';
			};
			
		};
		return htmltextstring;
}