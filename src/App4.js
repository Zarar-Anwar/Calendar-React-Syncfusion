// import { ScheduleComponent, Inject, Day, Month, Agenda, Week, WorkWeek ,ViewsDirective,ViewDirective
// ,TimelineViews,TimelineMonth,DragAndDrop,Resize,ResourcesDirective,ResourceDirective
// } from '@syncfusion/ej2-react-schedule';

// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
// import {TreeViewComponent}  from '@syncfusion/ej2-react-navigations'
// import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
// import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
// import './App.css'
// import { L10n } from '@syncfusion/ej2-base';


// function App() {
//   const dataManager = new DataManager({
//     url: 'https://your-api-endpoint', // Specify the URL of your API endpoint
//     adaptor: new WebApiAdaptor(), // Use the WebApiAdaptor to fetch data from the API
//   });
//   const eventSettings = {
//     // dataSource:dataManager,
//     dataSource: [
//       {
//         Id: 1,
//         Subject: 'Meeting',
//         StartTime: new Date(2023, 6, 4, 10, 0), // July 4, 2023, 10:00 AM
//         EndTime: new Date(2023, 6, 4, 12, 0), // July 4, 2023, 12:00 PM
//         IsAllDay: false,
//         IsReadonly: true,
//         IsBlock: false,
//         Location: 'Conference Room',
//         Description: 'Discuss project status',
//         RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
//         ResourceId:3,
//         // GroupId:2
//         // Set other properties as needed
//       },
//     ],
//     fields: {
//       id: 'Id',
//       subject: { name: 'Subject', default: 'No Subject' },
//       startTime: { name: 'StartTime' },
//       endTime: { name: 'EndTime' },
//       isAllDay: { name: 'IsAllDay' },
//       isReadonly: { name: 'IsReadonly' },
//       isBlock: { name: 'IsBlock' },
//       location: { name: 'Location' },
//       description: { name: 'Description' },
//       recurrenceRule: { name: 'RecurrenceRule' },
//       resourceId:{name:"ResourceId"},
//       // groupId:{name:'GroupId'}
//       // Map other fields as needed
//     },
//   };
//   const onDragStart = (args) => {
//     args.scroll.enable = false;
//     if (args.navigation) {
//       args.navigation.enable = true;
//     }
//     if (args.interval) {
//       args.interval = 1;
//     }
//   };

//   const onResizeStart = (args) => {
//     args.scroll.enable = false;
//     if (args.navigation) {
//       args.navigation.enable = true;
//     }
//     if (args.interval) {
//       args.interval = 1;
//     }
//   };

//   const dataManager2=[
//     {
//       id:'1',
//       Name:'Zarar'
//     },{
//       id:'2',
//       Name:'Zarar Anwar'
//     },{
//       id:'3',
//       Name:'Zarar Anwar Khan'
//     },
//   ]

//   const fields={
//     dataSource:dataManager2,
//     id:'id',
//     text:"Name"
//   }

//   const onTreeDragStop = (args) => {
//     if (args.target && args.target.closest('.e-schedule')) {
//       let scheduleObj = args.target.closest('.e-schedule').ej2_instances[0];
//       let cellData = scheduleObj.getCellDetails(args.target);
//       let eventData = {
//         Subject: args.draggedNodeData.text,
//         StartTime: cellData.startTime,
//         EndTime: cellData.endTime,
//         isAllDay: cellData.isAllDay
//       };
//       scheduleObj.openEditor(eventData,"Add",true);
//       // scheduleObj.addEvent(eventData);
//     }
//   };


//   // function eventTemplate(props) {
//   //   return (
//   //     <div className='template-wrap' style={{
//   //       backgroundColor: 'orange',
//   //       paddingLeft: '27px',
//   //       paddingRight: '250px',
//   //       paddingTop: '3px',
//   //       paddingBottom: '10px',
//   //       fontSize: '18px',
//   //       fontWeight: '500',
//   //     }}>
//   // <div>{props.Subject}   {props.StartTime.toLocaleTimeString('en-US', {
//   //   hour: 'numeric',
//   //   minute: 'numeric',
//   //   hour12: true
//   // })}  {props.Time.toLocaleTimeString('en-US', {
//   //   hour: 'numeric',
//   //   minute: 'numeric',
//   //   hour12: true
//   // })}</div>
//   //     </div>
//   //   );
//   // }
  
//   // const myEditor = (props) => {
//   //   return (
//   //     <>
//   //       <table className='custom-event-editor' style={{ width: '100%' }}>
//   //         <tbody>
//   //           <tr>
//   //             <td className='e-textlabel'>
//   //               Summary
//   //             </td>
//   //             <td>
//   //               <input className='e-field e-input' name="Summary" id="Summary" style={{ width: '100%' }} defaultValue={props.Summary} />
//   //             </td>
//   //           </tr>
//   //           <tr>
//   //             <td className='e-textlabel'>
//   //               Status
//   //             </td>
//   //             <td>
//   //               <DropDownListComponent style={{ width: '100%' }}
//   //                 id='EventType'
//   //                 dataSource={['New', 'Requested', 'Confirmed']}
//   //                 placeholder='Choose Status'
//   //                 data-name='EventType'
//   //                 value={props.EventType || null}
//   //               ></DropDownListComponent>
//   //             </td>
//   //           </tr>
//   //           <tr>
//   //             <td className='e-textlabel'>
//   //               From
//   //             </td>
//   //             <td>
//   //               <DateTimePickerComponent
//   //                 id='StartTime'
//   //                 data-name='StartTime'
//   //                 value={props.StartTime ? new Date(props.StartTime) : null}
//   //                 format='dd/MM/yy hh:mm a'
//   //               ></DateTimePickerComponent>
//   //             </td>
//   //           </tr>
//   //           <tr>
//   //             <td className='e-textlabel'>
//   //               To
//   //             </td>
//   //             <td>
//   //               <DateTimePickerComponent
//   //                 id='EndTime'
//   //                 data-name='EndTime'
//   //                 value={props.EndTime ? new Date(props.EndTime) : null}
//   //                 format='dd/MM/yy hh:mm a'
//   //               ></DateTimePickerComponent>
//   //             </td>
//   //           </tr>
//   //           <tr>
//   //             <td className='e-textlabel'>
//   //               Reason
//   //             </td>
//   //             <td>
//   //               <textarea name="Description" id="Description" cols="50" rows="3"
//   //                 style={{ width: '100%', height: '60px !important', resize: 'vertical' }}
//   //                 defaultValue={props.Description}></textarea>
//   //             </td>
//   //           </tr>
//   //         </tbody>
//   //       </table>
//   //     </>
//   //   )
//   // };
  
//  L10n.load({
//   'en-US':{
//     'schedule':{
//       'saveButton':"Add",
//       "cancelButton":"Close",
//       "deleteButton":"Remove",
//       "newEvent":"Add Event"
//     }
//   }
//  })
// const resourceDataSource=[
//   {Name:'Zarar',Id:1, Color:'#ea7a57'},
//   {Name:'Anwar',Id:2, Color:'#357CD2'},
//   {Name:'Khan',Id:3, Color:'#7fa900'},
// ]
// const eventSettings2 = {
//    dataSource: [
//    {Id:1,Subject:'Skarting',StartTime:new Date(2023,9,6,6,0),EndTime:new Date(2023,9,6,7,0),ResourceId:1},
//     {Id:2,Subject:'Hiking',StartTime:new Date(2023,9,6,12,0),EndTime:new Date(2023,9,6,1,0),ResourceId:2},
//     {Id:3,Subject:'Meeting',StartTime:new Date(2023,9,6,10,0),EndTime:new Date(2023,9,6,11,0),ResourceId:3},
//   ],
//   fields: {
//     id: 'Id',
//     subject: { name: 'Subject'},
//     startTime: { name: 'StartTime' },
//     endTime: { name: 'EndTime' },
//     isAllDay: { name: 'IsAllDay' },
//     isReadonly: { name: 'IsReadonly' },
//     isBlock: { name: 'IsBlock' },
//     location: { name: 'Location' },
//     description: { name: 'Description' },
//     recurrenceRule: { name: 'RecurrenceRule' },
//     ResourceId:{name:"ResourceId"}
//     // Map other fields as needed
//   },
// };

// const groupData = {
//   // resources: ['Resources','Groups']
//   resources: ['Resources']
// };

// const groupDataSource=[
//   {Name:"Project1",Id:1,Color:"#df5286",GroupId:1},
//   {Name:"Project2",Id:2,Color:"#5978ee",GroupId:2},
//   {Name:"Project3",Id:3,Color:"#00bdae",GroupId:3},
// ]

//   return (
//     <>
//       <div style={{ marginTop: '80px' }}>
//         {/* <ScheduleComponent currentView='Month' selectedDate={new Date(2019, 0, 11)} eventSettings={eventSettings}  allowDragandDrop={false} allowResize={false} >  */}
//         {/* <ScheduleComponent height={550} currentView='Month' selectedDate={new Date(2023,0,6)} eventSettings={{template:eventTemplate}} editorTemplate={myEditor} dragStart={onDragStart} resizeStart={onResizeStart} > */}
//         <ScheduleComponent 
//         height={550}
//         currentView='Month'
//         selectedDate={new Date(2023,0,6)}
//         dragStart={onDragStart}
//         resizeStart={onResizeStart} 
//         eventSettings={eventSettings}
//         // editorTemplate={myEditor}
//         group={groupData}

//         >
//           <ViewsDirective>
//             {/* <ViewDirective option='Day' startHour='03:00' endHour='18:00' interval={3} isSelected={true}></ViewDirective> */}
//             {/* <ViewDirective option='Month' isSelected={true} showWeekNumber={true} showWeekend={false} ></ViewDirective> */}
//             <ViewDirective option='Month' displayName='My_Month' isSelected={true} showWeekNumber={true} ></ViewDirective>
//             <ViewDirective option='Agenda'></ViewDirective>
//             <ViewDirective option='TimelineDay' startHour='03:00' endHour='19:00'></ViewDirective>
//             <ViewDirective option='TimelineMonth'></ViewDirective>
//           </ViewsDirective>
//           <ResourcesDirective>
//             <ResourceDirective 
//             field='ResourceId'
//             title='Resource Name'
//             name='Resources'
//             textField='Name'
//             idField='Id'
//             colorField='Color'
//             dataSource={resourceDataSource}
//             >
//             </ResourceDirective>
//             <ResourceDirective 
//             textField='Name'
//             idField='Id'
//             colorField='Color'
//             groupIDField='GroupId'
//             allowMultiple={true}
//             field='GroupId'
//             name='Groups'
//             title='Group Name' 
//             dataSource={groupDataSource}
//             >

//             </ResourceDirective>
//           </ResourcesDirective>
//           <Inject services={[ Month,Agenda,TimelineViews,TimelineMonth,DragAndDrop,Resize]} />
//         </ScheduleComponent>

//       </div>
//       {/* <div style={{textAlign:"center"}}>
//         <h1>Waiting Events</h1>
//         <TreeViewComponent allowDragAndDrop={true} nodeDragStop={onTreeDragStop}  fields={fields}/>
//       </div> */}

//     </>
//   );
// }

// import * as React from 'react';
// import { useEffect } from 'react';
// import { Week,ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject,TimelineWeek, Resize, DragAndDrop, TimelineMonth, Day, Month, TimelineViews } from '@syncfusion/ej2-react-schedule';
// import './index.css';
// import {TreeViewComponent}  from '@syncfusion/ej2-react-navigations'
// import { Internationalization } from '@syncfusion/ej2-base';

// // import * as dataSource from './datasource.json';
// /**
//  * schedule block events sample
//  */
// const App = () => {
//     let intl = new Internationalization();
//     const dataManager2=[
//         {
//           id:'1',
//           Name:'Zarar'
//         },{
//           id:'2',
//           Name:'Zarar Anwar'
//         },{
//           id:'3',
//           Name:'Zarar Anwar Khan'
//         },
//       ]
    
//       const fields={
//         dataSource:dataManager2,
//         id:'id',
//         text:"Name"
//       }
    
//       const onTreeDragStop = (args) => {
//         if (args.target && args.target.closest('.e-schedule')) {
//           let scheduleObj = args.target.closest('.e-schedule').ej2_instances[0];
//           let cellData = scheduleObj.getCellDetails(args.target);
//           let eventData = {
//             Subject: args.draggedNodeData.text,
//             StartTime: cellData.startTime,
//             EndTime: cellData.endTime,
//             isAllDay: cellData.isAllDay
//           };
//           scheduleObj.openEditor(eventData,"Add",true);
//           // scheduleObj.addEvent(eventData);
//         }
//       };    
//     // const data = extend([], dataSource.blockData, null, true);
//     const employeeData = [
//         { Text: 'Ikram', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Content writer' },
//         { Text: 'Sheraz', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Designer' },
//         // { Text: 'Saqib', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Software Engineer' },
//         // { Text: 'Umar', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Support Engineer' },
//         // { Text: 'Anas', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Human Resource' },
//         // { Text: 'Zarar', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Content Analyst' }
//     ];
//     const getEmployeeName = (value) => {
//         return value.resourceData[value.resource.textField];
//     };
//     const getEmployeeImage = (value) => {
//         return getEmployeeName(value).toLowerCase();
//     };
//     const getEmployeeDesignation = (value) => {
//         return value.resourceData.Designation;
//     };
//     const resourceHeaderTemplate = (props) => {
//         return (<div className="template-wrap">
//                 <div className="employee-category">
//                     <div className={"employee-image " + getEmployeeImage(props)}/>
//                     <div className="employee-name"> {getEmployeeName(props)}</div>
//                     <div className="employee-designation">{getEmployeeDesignation(props)}</div>
//                 </div>
//             </div>);
//     };
//     // const resourceHeaderTemplate = (props) => {
//     //     return (
//     //         <div className="resource-header">
//     //             <div className="employee-category">
//     //                 <div className={`employee-image ${getEmployeeImage(props)}`} />
//     //                 <div className="employee-name">{getEmployeeName(props)}</div>
//     //                 <div className="employee-designation">{getEmployeeDesignation(props)}</div>
//     //             </div>
//     //         </div>
//     //     );
//     // };

//     const unassignedShiftsTemplate = () => {
//         return (
//             <div className="unassigned-shifts-view">
//                 <div className="unassigned-shifts-label">Unassigned Shifts</div>
//                 {/* Custom content for Unassigned Shifts */}
//             </div>
//         );
//     };
//     const eventData = [
//         { Id: 1, Subject: 'Event 1', StartTime: new Date(2023, 6, 2, 10, 0), EndTime: new Date(2023, 6, 2, 12, 0) },
//         { Id: 2, Subject: 'Event 2', StartTime: new Date(2023, 6, 3, 14, 0), EndTime: new Date(2023, 6, 3, 16, 0) },
//         // Add more event data as needed
//       ];
      
//       const getDateHeaderDay = (value) => {
//         return intl.formatDate(value, { skeleton: 'E' });
//       };
      
//       const getDateHeaderDate = (value) => {
//         return intl.formatDate(value, { skeleton: 'd' });
//       };
      
//       const getEventsForDate = (date) => {
//         return eventData.filter((event) => {
//           return date >= event.StartTime && date <= event.EndTime;
//         });
//       };
      
//       const eventTemplate = (eventData) => {
//         return (
//           <div>
//             {eventData.map((event) => (
//               <div key={event.Id} className="event-item">
//                 {event.Subject}
//               </div>
//             ))}
//           </div>
//         );
//       };
      
//       const dateHeaderTemplate = (props) => {
//         const eventsForDate = getEventsForDate(props.date);
//         return (
//           <>
//             <div>{getDateHeaderDay(props.date)}</div>
//             <div>{getDateHeaderDate(props.date)}</div>
//             <div className="date-text">{eventTemplate(eventsForDate)}</div>
//           </>
//         );
//       };
//     return (
    
//     <div className='schedule-control-section ' style={{marginTop:"90px"}} >
//             <div className='col-lg-12 control-section'>
//                 <div className='control-wrapper drag-sample-wrapper'>
//                     <div className="schedule-container">
//                         <ScheduleComponent dateHeaderTemplate={dateHeaderTemplate} currentView='TimelineMonth'  cssClass='block-events' width='100%' height='100%' selectedDate={new Date(2023, 6, 2)}  resourceHeaderTemplate={resourceHeaderTemplate} group={{ enableCompactView: false, resources: ['Employee'] }}>
//                             <ResourcesDirective>
//                                 <ResourceDirective field='EmployeeId' title='Employees' name='Employee' allowMultiple={true} dataSource={employeeData} textField='Text' idField='Id' colorField='Color'/>
//                             </ResourcesDirective>
//                                 {/* <p style={{marginLeft:"5px"}}>UnAssigned Shifts</p>
//                                 <TreeViewComponent style={{width:"140px",marginLeft:"0px"}} allowDragAndDrop={true} nodeDragStop={onTreeDragStop}  fields={fields}/> */}
//                             <ViewsDirective>
//                                 {/* <ViewDirective option=''/> */}
//                                 <ViewDirective option='Week'/>
//                                 <ViewDirective option='Month'/>
//                                 <ViewDirective option='TimelineMonth'/>
//                                 {/* <ViewDirective option='TimelineDay'/> */}
//                             </ViewsDirective>
//                             <Inject services={[ Week,Month,TimelineMonth, Resize, DragAndDrop]}/>
//                         </ScheduleComponent>
//                     </div>
//                 </div>
//             </div>
//         </div>
// //     <div className="schedule-container">
// //     <ScheduleComponent
// //         cssClass="block-events"
// //         width="100%"
// //         height="650px"
// //         selectedDate={new Date(2021, 7, 2)}
// //         resourceHeaderTemplate={resourceHeaderTemplate}
// //         group={{ enableCompactView: false, resources: ['Employee'] }}
// //     >
// //         <ResourcesDirective>
// //             <ResourceDirective
// //                 field="EmployeeId"
// //                 title="Employees"
// //                 name="Employee"
// //                 allowMultiple={true}
// //                 dataSource={employeeData}
// //                 textField="Text"
// //                 idField="Id"
// //                 colorField="Color"
// //             />
// //         </ResourcesDirective>
// //         <ViewsDirective>
// //             <ViewDirective option="TimelineMonth" />
// //             <ViewDirective option="Day" displayName="Unassigned Shifts" template={unassignedShiftsTemplate} />
// //         </ViewsDirective>
// //         <Inject services={[TimelineMonth, Day, Resize, DragAndDrop]} />
// //     </ScheduleComponent>
// // </div>
//         );
// };
// export default App;

import * as React from 'react';
import { useEffect } from 'react';
import { ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject, TimelineWeek, Resize, DragAndDrop, TimelineMonth, Week, Month } from '@syncfusion/ej2-react-schedule';
import './index.css';
import { Internationalization } from '@syncfusion/ej2-base';

const App = () => {
    let intl = new Internationalization();

    // ... Other code ...

    const eventData = [
        { Id: 1, Subject: 'Event 1', StartTime: new Date(2023, 6, 2, 10, 0), EndTime: new Date(2023, 6, 2, 12, 0) },
        { Id: 2, Subject: 'Event 2', StartTime: new Date(2023, 6, 3, 14, 0), EndTime: new Date(2023, 6, 3, 16, 0) },
        { Id: 3, Subject: 'All-Day Event', StartTime: new Date(2023, 6, 2), EndTime: new Date(2023, 6, 3) }, // Add all-day events
        // Add more event data as needed
    ];

    const getDateHeaderDay = (value) => {
        return intl.formatDate(value, { skeleton: 'E' });
    };

    const getDateHeaderDate = (value) => {
        return intl.formatDate(value, { skeleton: 'd' });
    };

    const getEventsForDate = (date) => {
        return eventData.filter((event) => {
            return date >= event.StartTime && date <= event.EndTime;
        });
    };

    const eventTemplate = (eventData) => {
        return (
            <div>
                {eventData.map((event) => (
                    <div key={event.Id} className="event-item">
                        {event.Subject}
                    </div>
                ))}
            </div>
        );
    };

    const dateHeaderTemplate = (props) => {
        const eventsForDate = getEventsForDate(props.date);
        return (
            <>
                <div>{getDateHeaderDay(props.date)}</div>
                <div>{getDateHeaderDate(props.date)}</div>
                <div className="date-text">{eventTemplate(eventsForDate)}</div>
            </>
        );
    };
    const getEmployeeName = (value) => {
              return value.resourceData[value.resource.textField];
          };
          const getEmployeeImage = (value) => {
              return getEmployeeName(value).toLowerCase();
          };
          const getEmployeeDesignation = (value) => {
              return value.resourceData.Designation;
          };
          const employeeData = [
                    { Text: 'Ikram', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Content writer' },
                    { Text: 'Sheraz', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Designer' },
                    // { Text: 'Saqib', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Software Engineer' },
                    // { Text: 'Umar', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Support Engineer' },
                    // { Text: 'Anas', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Human Resource' },
                    // { Text: 'Zarar', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Content Analyst' }
                ];
    const resourceHeaderTemplate = (props) => {
              return (
                  <div className="resource-header">
                      <div className="employee-category">
                          <div className={`employee-image ${getEmployeeImage(props)}`} />
                          <div className="employee-name">{getEmployeeName(props)}</div>
                          <div className="employee-designation">{getEmployeeDesignation(props)}</div>
                      </div>
                  </div>
              );
          };
    return (
        <div className='schedule-control-section' style={{ marginTop: "90px" }}>
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper drag-sample-wrapper'>
                    <div className="schedule-container">
                        <ScheduleComponent
                            dateHeaderTemplate={dateHeaderTemplate}
                            currentView='TimelineMonth'
                            cssClass='block-events'
                            width='100%'
                            height='100%'
                            selectedDate={new Date(2023, 6, 2)}
                            resourceHeaderTemplate={resourceHeaderTemplate}
                            group={{ enableCompactView: false, resources: ['Employee'] }}
                        >
                            <ResourcesDirective>
                                <ResourceDirective field='EmployeeId' title='Employees' name='Employee' allowMultiple={true} dataSource={employeeData} textField='Text' idField='Id' colorField='Color' />
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='Week' />
                                <ViewDirective option='Month' />
                                <ViewDirective option='TimelineMonth' />
                            </ViewsDirective>
                            <Inject services={[Week, Month, TimelineMonth, Resize, DragAndDrop]} />
                        </ScheduleComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;



// export default App;
