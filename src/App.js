import * as React from 'react';
import { ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject, Resize, DragAndDrop, TimelineMonth, Day, Month, TimelineViews } from '@syncfusion/ej2-react-schedule';
import './index.css';

const App = () => {

    const employeeData = [
        { Text: 'UnSigned Shifts', Id: 1, GroupId: 1, Color: '#fffff', Designation: '' },
        { Text: 'Ikram', Id: 2, GroupId: 2, Color: '#bbdc00', Designation: 'CEO' },
        { Text: 'Sheraz', Id: 3, GroupId: 3, Color: '#9e5fff', Designation: 'Project Manager' },
      
    ];
    const getEmployeeName = (value) => {
        return value.resourceData[value.resource.textField];
    };
    const getEmployeeImage = (value) => {
        return getEmployeeName(value).toLowerCase();
    };
    const getEmployeeDesignation = (value) => {
        return value.resourceData.Designation;
    };
    const resourceHeaderTemplate = (props) => {
        return (<div className="template-wrap">
                <div className="employee-category">
                    <div className={"employee-image " + getEmployeeImage(props)}/>
                    <div className="employee-name"> {getEmployeeName(props)}</div>
                    <div className="employee-designation">{getEmployeeDesignation(props)}</div>
                </div>
            </div>);
    };
    const eventSettings = {
    dataSource: [
      {
        Id: 1,
        Subject: 'Meet with Mark',
        StartTime: new Date(2023, 6, 3, 10, 0), // July 4, 2023, 10:00 AM
        EndTime: new Date(2023, 6, 4, 12, 0), // July 4, 2023, 12:00 PM
        IsAllDay: false,
        IsReadonly: true,
        IsBlock: false,
        Location: 'Conference Room',
        Description: 'Discuss project status',
        EmployeeId:2
      },
      {
        Id: 2,
        Subject: 'Meet with Saqib',
        StartTime: new Date(2023, 6, 4, 10, 0), // July 4, 2023, 10:00 AM
        EndTime: new Date(2023, 6, 5, 12, 0), // July 4, 2023, 12:00 PM
        IsAllDay: false,
        IsBlock: false,
        Location: 'Conference Room',
        Description: 'Discuss project status',
        EmployeeId:3
      },  {
        Id: 3,
        Subject: 'Meet with Saqib',
        StartTime: new Date(2023, 6, 2, 9, 0), // July 4, 2023, 10:00 AM
        EndTime: new Date(2023, 6, 5, 15, 0), // July 4, 2023, 12:00 PM
        IsAllDay: false,
        IsBlock: false,
        Location: 'Conference Room',
        Description: 'Discuss project status',
        EmployeeId:1
      },
      {
        Id: 4,
        Subject: 'Meet with Zarar',
        StartTime: new Date(2023, 6, 2, 9, 0), // July 4, 2023, 10:00 AM
        EndTime: new Date(2023, 6, 5, 15, 0), // July 4, 2023, 12:00 PM
        IsAllDay: false,
        IsBlock: false,
        Location: 'Conference Room',
        Description: 'Discuss project status',
        EmployeeId:1
      },
    ],
    fields: {
      id: 'Id',
      subject: { name: 'Subject' },
      startTime: { name: 'StartTime' },
      endTime: { name: 'EndTime' },
      isAllDay: { name: 'IsAllDay' },
      isReadonly: { name: 'IsReadonly' },
      isBlock: { name: 'IsBlock' },
      location: { name: 'Location' },
      description: { name: 'Description' },
      recurrenceRule: { name: 'RecurrenceRule' },
    
    },
  };
    return (
        <>
    <div className='schedule-control-section ' style={{marginTop:"90px"}} >
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper drag-sample-wrapper'>
                    <div className="schedule-container">
                        <ScheduleComponent eventSettings={eventSettings} currentView='TimelineMonth'  cssClass='block-events' width='100%' height='500px' selectedDate={new Date(2023, 6, 1)}  resourceHeaderTemplate={resourceHeaderTemplate} group={{ enableCompactView: false, resources: ['Employee'] }}>
                            <ResourcesDirective>
                                <ResourceDirective field='EmployeeId' title='Employees' name='Employee' allowMultiple={true} dataSource={employeeData} textField='Text' idField='Id' colorField='Color'/>
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='Month'/>
                                <ViewDirective option='TimelineMonth'/>
                            </ViewsDirective>
                            <Inject services={[ Day,Month,TimelineMonth, Resize, DragAndDrop]}/>
                        </ScheduleComponent>
                    </div>
                </div>
            </div>
        </div>
</>
        );
};
export default App;